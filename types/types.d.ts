interface State {}
interface Action {}
interface AppContextValue {
  state: State;
  dispatch: React.Dispatch<Action>;
}
export { Action, AppContextValue, State };
