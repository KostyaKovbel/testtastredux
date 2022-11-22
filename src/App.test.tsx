import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { getBreeds } from './utils/api';

test('find title', async () => {
  render(<App />);

  await waitFor(() => {
    const titleElement = screen.getByText(/Dog generator/i);
    expect(titleElement).toBeInTheDocument();
  });
});

test('find generate image button', async () => {
  render(<App />);

  await waitFor(() => {
    const buttonElement = screen.getByText(/Generate images/i);
    expect(buttonElement).toBeInTheDocument();
  });
});

test('add new field combo', async () => {
  render(<App />);

  await waitFor(() => {
    const addNewFieldButton = screen.getByText(/Add/i);
    expect(addNewFieldButton).toBeInTheDocument();
  });
});

test('get breeds data from server', async () => {
  return await getBreeds('breeds/list/all').then(data => {
    expect(typeof data).toBe('object');
  });
});
