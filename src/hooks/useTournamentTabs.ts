'use client';

import { useState, useCallback } from 'react';

export const useTournamentTabs = (defaultTab: string = 'valorant') => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const switchTab = useCallback((tabName: string) => {
    setActiveTab(tabName);
  }, []);

  return { activeTab, switchTab };
};
