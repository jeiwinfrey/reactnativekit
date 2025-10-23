'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ScreenHoverContextType {
  hoveredScreen: string | null;
  setHoveredScreen: (name: string | null) => void;
}

const ScreenHoverContext = createContext<ScreenHoverContextType | undefined>(undefined);

export function ScreenHoverProvider({ children }: { children: ReactNode }) {
  const [hoveredScreen, setHoveredScreen] = useState<string | null>(null);

  return (
    <ScreenHoverContext.Provider value={{ hoveredScreen, setHoveredScreen }}>
      {children}
    </ScreenHoverContext.Provider>
  );
}

export function useScreenHover() {
  const context = useContext(ScreenHoverContext);
  if (!context) {
    throw new Error('useScreenHover must be used within ScreenHoverProvider');
  }
  return context;
}

