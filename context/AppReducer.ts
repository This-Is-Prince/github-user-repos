import { Reducer } from "react";
import { Action, Page, State } from "../types/types";

export const initialState: State = {
  username: "",
  isLoading: { value: false, why: "FIND_USER" },
  user: {
    avatar_url: "",
    name: "",
    bio: "",
    location: "",
    twitter_username: "",
    public_repos: 0,
    repos: [],
  },
  pages: [],
  page: 1,
};

export const AppReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "ADD_USERNAME":
      return {
        username: action.payload,
        isLoading: { value: false, why: "FIND_USER" },
        user: {
          avatar_url: "",
          name: "",
          bio: "",
          location: "",
          twitter_username: "",
          public_repos: 0,
          repos: [],
        },
        page: 1,
        pages: [],
      };
    case "IS_LOADING":
      return {
        ...state,
        isLoading: { ...state.isLoading, value: action.payload },
      };
    case "FIND_USER":
      return { ...state, isLoading: { value: true, why: "FIND_USER" } };
    case "ADD_USER":
      const totalRepos = action.payload.public_repos;
      const totalPages = Math.ceil(totalRepos / 10);
      const pages: Page[] = [{ which: "PREVIOUS", value: 0 }];
      for (let i = 1; i <= totalPages; i++) {
        if (i === 0) {
          pages.push({ which: "ACTIVE", value: i });
        } else {
          pages.push({ which: "NORMAL", value: i });
        }
        if (i === 5) {
          break;
        }
      }
      pages.push({ which: "NEXT", value: 6 });
      return {
        ...state,
        isLoading: { value: false, why: "FIND_REPOS" },
        user: action.payload,
        page: 1,
        pages,
      };
    case "ADD_REPOS":
      return {
        ...state,
        isLoading: { value: false, why: "FIND_USER" },
        user: { ...state.user, repos: action.payload },
      };
    default:
      return state;
  }
};
