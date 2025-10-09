'use client';

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from 'react';

interface TournamentContextType {
  activeTab: string;
  switchTab: (tab: string) => void;
}

const TournamentContext = createContext<TournamentContextType | undefined>(
  undefined
);

export function TournamentProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState('valorant');

  const switchTab = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  return (
    <TournamentContext.Provider value={{ activeTab, switchTab }}>
      {children}
    </TournamentContext.Provider>
  );
}

export function useTournamentContext() {
  const context = useContext(TournamentContext);
  if (!context) {
    throw new Error(
      'useTournamentContext must be used within TournamentProvider'
    );
  }
  return context;
}
