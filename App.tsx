import React from 'react';
import { CursorProvider } from './context/CursorContext';
import Cursor from './components/Cursor';
import HorizontalScrollContainer from './components/HorizontalScrollContainer';

const App: React.FC = () => {
  return (
    <CursorProvider>
      <main className="w-full min-h-screen bg-[#F4F4F5] text-[#09090B]">
        <Cursor />
        <HorizontalScrollContainer />
        
        {/* Mobile Warning Overlay Removed */}
      </main>
    </CursorProvider>
  );
};

export default App;