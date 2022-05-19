interface AppContextValue {
  state: State;
  dispatch: React.Dispatch<Action>;
}

type Api = "FIND_USER" | "FIND_REPOS";

interface LoadingProps {
  why: Api;
}

interface State {
  username: string;
  isLoading: { value: boolean; why: Api };
}
type Action =
  | { type: "ADD_USERNAME"; payload: string }
  | { type: "IS_LOADING"; payload: boolean }
  | { type: "FIND_USER" };

export { Action, AppContextValue, State, LoadingProps, Api };
