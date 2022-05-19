interface AppContextValue {
  state: State;
  dispatch: React.Dispatch<Action>;
}

interface State {
  username: string;
  isLoading: boolean;
}
type Action =
  | { type: "ADD_USERNAME"; payload: string }
  | { type: "IS_LOADING"; payload: boolean }
  | { type: "FIND_USER" };

export { Action, AppContextValue, State };
