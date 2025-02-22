import contactsSlice from "../slices/contacts";
import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../slices/users";
import { createLogger } from "redux-logger";
// console.log(contactsSlice.actions.add({
//     x:10,y:20
// }));

let allReducers = {
    contacts:contactsSlice.reducer,
    users : usersSlice.reducer
};

var logger =createLogger();
let store = configureStore({
   reducer:allReducers,
   devTools :process.env.NODE_ENV !=="production",
   middleware:(getDefaultMiddleware)=>[...getDefaultMiddleware(),logger]
});

export default store;