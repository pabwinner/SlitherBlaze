// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SlitherBlaze title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SlitherBlaze/i);
    expect(titleElement).toBeInTheDocument();
});
