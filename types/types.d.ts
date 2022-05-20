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
interface Page {
  which: "NEXT" | "PREVIOUS" | "ACTIVE" | "NORMAL";
  value: number;
}

interface ReposProps {
  repos: Repo[];
  pages: Page[];
}
interface PaginationProps {
  pages: Page[];
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
  pages: Page[];
  page: number;
}
type Action =
  | { type: "ADD_USERNAME"; payload: string }
  | { type: "IS_LOADING"; payload: boolean }
  | { type: "FIND_USER" }
  | { type: "ADD_USER"; payload: User }
  | { type: "ADD_REPOS"; payload: Repo[] };

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
  PaginationProps,
  Page,
};
