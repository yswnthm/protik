import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('does not show the desktop-only warning on mobile', () => {
    render(<App />);
    const warningText = screen.queryByText(/DESKTOP EXPERIENCE ONLY/i);
    expect(warningText).not.toBeInTheDocument();
  });
});
