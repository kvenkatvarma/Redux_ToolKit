import { createSlice } from "@reduxjs/toolkit";
import contactsInitialState from "../data/contacts";
import contactsReducer from "../reducers/contacts";

var contactsSlice = createSlice({
    name : "contacts-list",
    initialState:contactsInitialState,
    reducers:contactsReducer
});

export const {add,remove,update} = contactsSlice.actions;
export default contactsSlice;