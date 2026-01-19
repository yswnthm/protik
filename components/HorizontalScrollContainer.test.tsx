import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import HorizontalScrollContainer from './HorizontalScrollContainer';

// Mock the child sections to simplify testing
vi.mock('../sections/TitleSection', () => ({ default: () => <div data-testid="section">Title</div> }));
vi.mock('../sections/IntroSection', () => ({ default: () => <div data-testid="section">Intro</div> }));
vi.mock('../sections/BoltSection', () => ({ default: () => <div data-testid="section">Bolt</div> }));
vi.mock('../sections/DukaanSection', () => ({ default: () => <div data-testid="section">Dukaan</div> }));
vi.mock('../sections/StackSection', () => ({ default: () => <div data-testid="section">Stack</div> }));
vi.mock('../sections/ContactSection', () => ({ default: () => <div data-testid="section">Contact</div> }));

describe('HorizontalScrollContainer', () => {
  
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly on desktop (horizontal layout)', () => {
    // Mock window matchMedia for Desktop
    window.matchMedia = vi.fn().mockImplementation(query => ({
      matches: query === '(min-width: 1024px)' ? true : false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // deprecated
      removeListener: vi.fn(), // deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    render(<HorizontalScrollContainer />);
    
    // Check for the ghost container used for scroll height
    // Note: In the current implementation it has h-[950vh]
    // We can find it by class or role if we add one, currently generic div
    // We'll assume the current structure is what we want for desktop
    const ghostContainer = document.querySelector('.invisible');
    expect(ghostContainer).toBeInTheDocument();
    expect(ghostContainer).toHaveClass('h-[950vh]');
  });

  it('renders correctly on mobile (vertical layout)', () => {
    // Mock window matchMedia for Mobile
    window.matchMedia = vi.fn().mockImplementation(query => ({
      matches: false, // Desktop query fails
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    render(<HorizontalScrollContainer />);

    // On mobile, we expect the ghost container to be gone or different
    const ghostContainer = document.querySelector('.invisible');
    // FAIL EXPECTATION: Currently it renders the same on all screens
    // We want it to NOT be there or NOT have the huge height
    if (ghostContainer) {
        expect(ghostContainer).not.toHaveClass('h-[950vh]');
    } else {
        expect(ghostContainer).not.toBeInTheDocument();
    }
    
    // We expect the main container to be flex-col
    // The main wrapper with content
    const contentWrapper = screen.getByText('Title').parentElement;
    expect(contentWrapper).toHaveClass('flex-col');
  });
});
