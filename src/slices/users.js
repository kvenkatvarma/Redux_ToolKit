import { createSlice } from "@reduxjs/toolkit";
import userInitialState from "../data/users";
import usersReducer from "../reducers/users";

let usersSlice = createSlice({
   name :"users",
   initialState :userInitialState,
   reducers:usersReducer
});

export const {login,logout} = usersSlice.actions;
export default usersSlice;