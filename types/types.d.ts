interface AppContextValue {
  state: State;
  dispatch: React.Dispatch<Action>;
}

interface State {
  username: string;
}
type Action = { type: "ADD_USERNAME"; payload: string };

export { Action, AppContextValue, State };
