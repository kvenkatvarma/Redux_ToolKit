import { fetchContactsThunk } from "../thunks/contacts";

let contactsReducer ={
   add:(state,action)=>{
       state.push(action.payload);
   },

   //remove reducer
   remove:(state,action)=>{
    let index = state.findIndex(contact => contact.id == action.payload);
     state.splice(index,1);
   },

   update:(state,action)=>{
    let index = state.findIndex(contact => contact.id == action.payload.id);
    state[index].firstName = action.payload.firstName;
    state[index].lastName = action.payload.lastName;
    state[index].email = action.payload.email;
    state[index].phone = action.payload.phone;

   },
};

export let contactsExtraReducer ={
[fetchContactsThunk.pending]:(state,action)=>{
    state.data = [];
    state,status = action.meta.requestStatus;
    state.error = [];
},

[fetchContactsThunk.fulfilled]:(state,action)=>{
    state.data = action.payload;
    state.status = action.meta.requestStatus;
    state.error = [];
},
[fetchContactsThunk.rejected]:(state,action)=>{
    state.data = [];
    state.status = action.meta.requestStatus;
    state.error = action.error;
}

};

export default contactsReducer;