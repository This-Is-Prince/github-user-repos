import { Reducer } from "react";
import { Action, State } from "../types/types";

export const initialState: State = { username: "" };

export const AppReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "ADD_USERNAME":
      return { ...state, username: action.payload };
    default:
      return state;
  }
};
