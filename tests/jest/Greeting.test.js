// src/components/Greeting.test.jsx
import { render, screen } from '@testing-library/react';
import Greeting from '../../src/Components/Greeting';
import React from 'react';

test('renders a greeting message', () => {
  render(<Greeting name="World" />);
  const greetingElement = screen.getByText(/Hello, World!/i);
  expect(greetingElement).toBeInTheDocument();
});