import { createContactsThunk, deleteContactsThunk, fetchContactsThunk, updateContactsThunk } from "../thunks/contacts";

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
    state.status = action.meta.requestStatus;
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
},

[createContactsThunk.pending]:(state,action)=>{
    state.status = action.meta.requestStatus;
    state.error = [];
},
[createContactsThunk.fulfilled]:(state,action)=>{
    state.data.push(action.payload);
    state.status = action.meta.requestStatus;
    state.error = [];
},
[createContactsThunk.rejected]:(state,action)=>{
   
    state.status = action.meta.requestStatus;
    state.error = action.error;
},


[updateContactsThunk.pending]:(state,action)=>{
    state.status = action.meta.requestStatus;
    state.error = [];
},
[updateContactsThunk.fulfilled]:(state,action)=>{
    let index = state.data.findIndex(contact=>contact.id == action.payload.id);
    state.data[index].firstName = action.payload.firstName;
    state.data[index].lastName = action.payload.lastName;
    state.data[index].email = action.payload.email;
    state.data[index].phone = action.payload.phone;

    
    state.status = action.meta.requestStatus;
    state.error = [];
},
[updateContactsThunk.rejected]:(state,action)=>{
   
    state.status = action.meta.requestStatus;
    state.error = action.error;
},


[deleteContactsThunk.pending]:(state,action)=>{
    state.status = action.meta.requestStatus;
    state.error = [];
},
[deleteContactsThunk.fulfilled]:(state,action)=>{
    let index = state.data.findIndex(contact=>contact.id == action.payload);
   state.data.splice(index,1);
    
    state.status = action.meta.requestStatus;
    state.error = [];
},
[deleteContactsThunk.rejected]:(state,action)=>{
   
    state.status = action.meta.requestStatus;
    state.error = action.error;
},

};

export default contactsReducer;