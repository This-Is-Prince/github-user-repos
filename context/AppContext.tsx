import React, {
  createContext,
  FC,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { AppContextValue } from "../types/types";
import { AppReducer, initialState } from "./AppReducer";

const AppContext = createContext<AppContextValue | null>(null);

const AppWrapper: FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const contextValue: AppContextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}

export default AppWrapper;
