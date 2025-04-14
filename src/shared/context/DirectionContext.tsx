// src/shared/context/DirectionContext.tsx
import { ReactNode, createContext, useContext, useState } from 'react';

type DirectionContextType = {
  direction: 'ltr' | 'rtl';
  setDirection: (direction: 'ltr' | 'rtl') => void;
};

const DirectionContext = createContext<DirectionContextType | undefined>(
  undefined,
);

export const DirectionProvider = ({ children }: { children: ReactNode }) => {
  const [direction, setDirection] = useState<'ltr' | 'rtl'>('rtl');

  return (
    <DirectionContext.Provider value={{ direction, setDirection }}>
      {children}
    </DirectionContext.Provider>
  );
};

export const useDirection = (): DirectionContextType => {
  const context = useContext(DirectionContext);
  if (!context) {
    throw new Error('useDirection must be used within a DirectionProvider');
  }
  return context;
};
