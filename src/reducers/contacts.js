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

export default contactsReducer;