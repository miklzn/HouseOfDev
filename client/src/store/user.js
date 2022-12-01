import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUser = createAction("SET_USER");
export const logout = createAction("LOGOUT");

const userReducer = createReducer(
  {},
  {
    [setUser]: (state, action) => action.payload,
    [logout]: (state, action) => ({}),
  }
);

export default userReducer;
