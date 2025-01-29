import contactsSlice from "../slices/contacts";
import { configureStore } from "@reduxjs/toolkit";
// console.log(contactsSlice.actions.add({
//     x:10,y:20
// }));

let allReducers = {
    contacts:contactsSlice.reducer
};
let store = configureStore({
   reducer:allReducers,
   devTools :process.env.NODE_ENV !=="production",
   middleware:(getDefaultMiddleware)=>[...getDefaultMiddleware()]
});
export default store;