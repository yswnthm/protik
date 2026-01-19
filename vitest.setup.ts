import '@testing-library/jest-dom';

// Mock IntersectionObserver
const IntersectionObserverMock = function () {
  return {
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  };
};

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

// Mock ResizeObserver

const ResizeObserverMock = function () {

  return {

    observe: vi.fn(),

    unobserve: vi.fn(),

    disconnect: vi.fn(),

  };

};



vi.stubGlobal('ResizeObserver', ResizeObserverMock);



// Mock matchMedia

Object.defineProperty(window, 'matchMedia', {

  writable: true,

  value: vi.fn().mockImplementation(query => ({

    matches: false,

    media: query,

    onchange: null,

    addListener: vi.fn(), // deprecated

    removeListener: vi.fn(), // deprecated

    addEventListener: vi.fn(),

    removeEventListener: vi.fn(),

    dispatchEvent: vi.fn(),

  })),

});
