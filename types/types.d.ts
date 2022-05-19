interface AppContextValue {
  state: State;
  dispatch: React.Dispatch<Action>;
}

type Api = "FIND_USER" | "FIND_REPOS";

interface LoadingProps {
  why: Api;
}

interface User {
  avatar_url: string;
  name: string;
  bio: string;
  location: string;
  twitter_username: string;
  public_repos: number;
  repos: any[];
}
interface InfoProps {
  avatar_url: string;
  name: string;
  bio: string;
  location: string;
  twitter_username: string;
}
interface ReposProps {
  repos: Repo[];
  public_repos: number;
}

interface Repo {
  name: string;
  description: string;
  html_url: string;
  languages: string[];
}

interface State {
  username: string;
  user: User;
  isLoading: { value: boolean; why: Api };
  page: number;
}
type Action =
  | { type: "ADD_USERNAME"; payload: string }
  | { type: "IS_LOADING"; payload: boolean }
  | { type: "FIND_USER" }
  | { type: "ADD_USER"; payload: User };

export {
  Action,
  AppContextValue,
  State,
  LoadingProps,
  Api,
  User,
  InfoProps,
  Repo,
  ReposProps,
};
