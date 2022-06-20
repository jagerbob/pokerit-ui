import React from "react";
import { usePersistedState } from "../hooks/usePersistedState";

type GlobalValueType = {
  username: string;
}

type GlobalModifierType = {
  setUsername: (username: string) => void;
}

type GlobalContextType = GlobalValueType & GlobalModifierType;

const noOp = () => {};

export const GlobalContext = React.createContext<GlobalContextType>({
  username: 'Guest',
  setUsername: noOp,
});

export type ProviderProps = {
  children: React.ReactNode;
  storageKey: string;
};

export const GlobalProvider = ({ children, storageKey }: ProviderProps) => {
  const [storedValues, setStoredValues] = usePersistedState<GlobalValueType>(
    `${storageKey}-layout`,
    {
      username: 'Guest',
    },
    { version: 0 },
  );

  const globalContextValue = React.useMemo<GlobalContextType>(() => {
    return {
      username: storedValues.username,
      setUsername: (username) => {
        console.log("HDBEHZEBD")
        setStoredValues((v) => ({ ...v, username: username }))
      },
    };
  }, [setStoredValues, storedValues.username]);

  return <GlobalContext.Provider value={globalContextValue}>{children} </GlobalContext.Provider>;
};

export const useGlobalState = () => {
  return React.useContext(GlobalContext);
};