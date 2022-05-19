import { Reducer } from "react";
import { Action, State } from "../types/types";

export const initialState: State = { username: "", isLoading: false };

export const AppReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "ADD_USERNAME":
      return { ...state, username: action.payload };
    case "IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "FIND_USER":
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
