import { Reducer } from "react";
import { Action, State } from "../types/types";

export const initialState: State = {
  username: "",
  isLoading: { value: false, why: "FIND_USER" },
};

export const AppReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "ADD_USERNAME":
      return { ...state, username: action.payload };
    case "IS_LOADING":
      return {
        ...state,
        isLoading: { ...state.isLoading, value: action.payload },
      };
    case "FIND_USER":
      return { ...state, isLoading: { value: true, why: "FIND_USER" } };
    default:
      return state;
  }
};
