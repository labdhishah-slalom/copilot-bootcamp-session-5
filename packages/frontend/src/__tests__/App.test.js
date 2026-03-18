import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from '../App';

// Create a test query client
const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

// Mock fetch for tests
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]),
  })
);

test('renders TODO App heading', async () => {
  const testQueryClient = createTestQueryClient();

  render(
    <QueryClientProvider client={testQueryClient}>
      <App />
    </QueryClientProvider>
  );

  const headingElement = await screen.findByText(/TODO App/i);
  expect(headingElement).toBeInTheDocument();
});

test('should delete a todo when delete button is clicked', async () => {
  const user = userEvent.setup();
  const mockTodos = [{ id: 1, title: 'Test Todo', completed: false }];
  
  global.fetch = jest.fn((url, options) => {
    if (options?.method === 'DELETE') {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockTodos[0]),
      });
    }
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockTodos),
    });
  });

  const testQueryClient = createTestQueryClient();
  
  render(
    <QueryClientProvider client={testQueryClient}>
      <App />
    </QueryClientProvider>
  );

  // Wait for todo to appear
  await waitFor(() => {
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
  });

  // Find and click delete button
  const deleteButton = screen.getByRole('button', { name: /delete/i });
  await user.click(deleteButton);

  // Verify DELETE request was made
  await waitFor(() => {
    const deleteCalls = global.fetch.mock.calls.filter(
      call => call[1]?.method === 'DELETE'
    );
    expect(deleteCalls.length).toBeGreaterThan(0);
  });
});

test('should display correct stats for incomplete and completed tasks', async () => {
  const mockTodos = [
    { id: 1, title: 'Incomplete 1', completed: false },
    { id: 2, title: 'Completed 1', completed: true },
    { id: 3, title: 'Incomplete 2', completed: false },
    { id: 4, title: 'Completed 2', completed: true },
    { id: 5, title: 'Incomplete 3', completed: false },
  ];
  
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockTodos),
    })
  );

  const testQueryClient = createTestQueryClient();
  
  render(
    <QueryClientProvider client={testQueryClient}>
      <App />
    </QueryClientProvider>
  );

  // Wait for stats to appear with correct numbers
  await waitFor(() => {
    expect(screen.getByText('3 items left')).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(screen.getByText('2 completed')).toBeInTheDocument();
  });
});

test('should display empty state message when there are no todos', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([]),
    })
  );

  const testQueryClient = createTestQueryClient();
  
  render(
    <QueryClientProvider client={testQueryClient}>
      <App />
    </QueryClientProvider>
  );

  // Wait for empty state message
  await waitFor(() => {
    expect(screen.getByText(/No todos yet/i)).toBeInTheDocument();
  });
});

afterEach(() => {
  jest.clearAllMocks();
});
