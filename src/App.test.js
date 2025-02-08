import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Todo App', () => {
  test('renders todo app title', () => {
    render(<App />);
    const titleElement = screen.getByText(/todo list/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('can add a new todo', () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/add a new task/i);
    const submitButton = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: 'New Todo Item' } });
    fireEvent.click(submitButton);

    const newTodoItem = screen.getByText(/new todo item/i);
    expect(newTodoItem).toBeInTheDocument();
  });

  test('can toggle filter buttons', () => {
    render(<App />);
    const allButton = screen.getByText(/all/i);
    const activeButton = screen.getByText(/active/i);
    const completedButton = screen.getByText(/completed/i);

    fireEvent.click(activeButton);
    expect(activeButton).toHaveClass('active');

    fireEvent.click(completedButton);
    expect(completedButton).toHaveClass('active');

    fireEvent.click(allButton);
    expect(allButton).toHaveClass('active');
  });
}); 