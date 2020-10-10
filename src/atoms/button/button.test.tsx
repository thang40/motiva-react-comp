// __tests__/fetch.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MTVButton from './button.comp';

test('Load default correctly', async () => {
  render(<MTVButton color='primary' label='button' />);
  expect(screen.getByRole('button')).toHaveAttribute('label', 'button');
});
