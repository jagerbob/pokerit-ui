import React from 'react';
import * as GlobalProvider from './globalContext';

export type ProvidersProps = {
  children: React.ReactNode;
  storageKey: string;
} & GlobalProvider.ProviderProps;

export const ContextProviders = ({ children, storageKey }: ProvidersProps) => {
  return (
    <GlobalProvider.GlobalProvider storageKey={storageKey}>
          {children}
    </GlobalProvider.GlobalProvider>
  );
};