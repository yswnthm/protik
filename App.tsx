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
        
        {/* Mobile Warning Overlay (Optional) */}
        <div className="lg:hidden fixed inset-0 z-50 bg-black text-white flex items-center justify-center p-8 text-center">
            <div>
                <h1 className="text-4xl font-bold mb-4">DESKTOP EXPERIENCE ONLY</h1>
                <p>This cinematic portfolio is designed for large screens and horizontal scrolling.</p>
            </div>
        </div>
      </main>
    </CursorProvider>
  );
};

export default App;