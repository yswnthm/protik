import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TitleSection from './TitleSection';
import IntroSection from './IntroSection';

// Mock Cursor Context
vi.mock('../context/CursorContext', () => ({
  useCursor: () => ({ setCursorType: vi.fn() }),
}));

describe('Responsive Sections', () => {
  it('TitleSection has responsive width classes', () => {
    const { container } = render(<TitleSection />);
    const section = container.firstChild;
    expect(section).toHaveClass('w-full');
    expect(section).toHaveClass('lg:w-screen');
  });

  it('IntroSection has responsive width classes', () => {
    const { container } = render(<IntroSection />);
    const section = container.firstChild;
    expect(section).toHaveClass('w-full');
    expect(section).toHaveClass('lg:w-[70vw]');
  });
});
