import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { getGlobalState } from './getGloabal';

export type Locale = 'vi' | 'en';
export type Device = 'MOBILE' | 'DESKTOP';
export type Theme = 'light' | 'dark';

interface GlobalState {
  locale: Locale;
  setLocale: React.Dispatch<React.SetStateAction<Locale>>;
  device: Device;
  setDevice: React.Dispatch<React.SetStateAction<Device>>;
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

export const useGlobalState = (): GlobalState => {
  const context = useContext(GlobalStateContext);

  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }

  return context;
};

export const GlobalStateProvider: React.FC = ({ children }) => {
  const [locale, setLocale] = useState<Locale>('en');
  const [theme, setTheme] = useState<Theme>('light');
  const [collapsed, setCollapsed] = useState(false);
  const [device, setDevice] = useState<Device>('MOBILE');

  /** initial theme */
  useEffect(() => {
    setTheme('light');
    const { device } = getGlobalState();

    setDevice(device);

    // watch system theme change
    if (!theme) {
      const mql = window.matchMedia('(prefers-color-scheme: dark)');

      function matchMode(e: MediaQueryListEvent) {
        setTheme(e.matches ? 'light' : 'dark');
      }

      mql.addEventListener('change', matchMode);
    }
  }, []);

  const value: GlobalState = useMemo(
    () => ({
      locale,
      setLocale,
      theme,
      setTheme,
      collapsed,
      setCollapsed,
      device,
      setDevice,
    }),
    [locale, theme, collapsed, device],
  );

  return <GlobalStateContext.Provider value={value}>{children}</GlobalStateContext.Provider>;
};
