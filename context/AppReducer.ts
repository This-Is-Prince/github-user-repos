import { Reducer } from "react";
import { Action, State } from "../types/types";

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
  page: 1,
};

export const AppReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "ADD_USERNAME":
      return {
        ...state,
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
      };
    case "IS_LOADING":
      return {
        ...state,
        isLoading: { ...state.isLoading, value: action.payload },
      };
    case "FIND_USER":
      return { ...state, isLoading: { value: true, why: "FIND_USER" } };
    case "ADD_USER":
      return {
        ...state,
        isLoading: { value: false, why: "FIND_USER" },
        user: action.payload,
      };
    default:
      return state;
  }
};
