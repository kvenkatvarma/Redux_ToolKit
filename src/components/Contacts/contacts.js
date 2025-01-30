import React,{useState} from "react";
import "../../store";
import { useSelector,useDispatch } from "react-redux";
import contactsSlice from "../../slices/contacts";
import { v1 as uuid } from "uuid";

function Contacts(){

   let contacts = useSelector(state=>state.contacts);
   let [firstName,setFirstName] =useState("");
   let [lastName,setLastName] =useState("");
   let [email,setEmail] =useState("");
   let [phone,setPhone] =useState("");

   let dispatch = useDispatch();
   let onAddClick=()=>{
        dispatch(contactsSlice.actions.add({
             id: uuid(),
             firstName:firstName,
             lastName:lastName,
             email:email,
             phone:phone
        }));
        setFirstName("");
        setLastName("");
   };

   let onDeleteClick =(contact)=>{
         if(window.confirm("Are you sure to delete this contact?"))
         {
            dispatch(contactsSlice.actions.remove(contact.id));
         }
   };

    return(
       <div className="container">
          <h4 className="grid-header">
             Contacts
            </h4>  
            <div className="box">
               <details>
                <summary>New Contact
                    </summary>
                   <div className="form-group">
                        <input type="text" placeholder="First Name" className="form-control" value={firstName} onChange={(event)=>{setFirstName(event.target.value);}}></input>
                    </div> 
                   
                    <div className="form-group">
                        <input type="text" placeholder="Last Name" className="form-control" value={lastName} onChange={(event)=>{setLastName(event.target.value);}}></input>
                    </div> 

                    <div className="form-group">
                        <input type="email" placeholder="Email" className="form-control" value={email} onChange={(event)=>{setEmail(event.target.value);}}></input>
                    </div> 

                    <div className="form-group">
                        <input type="text" placeholder="Phone" className="form-control" value={phone} onChange={(event)=>{setPhone(event.target.value);}}></input>
                    </div> 
                  
                    <button className="button button-green" onClick={onAddClick}>Save</button>
                    </details>    
            </div>     

            <div className="grid-container">
               <table className="grid">
                 <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Options</th>
                    </tr>
                 </thead>
                   <tbody>
                     {contacts.map((contact,index)=>
                    <tr key={contact.id}>
                        <td>{index +1} </td>
                        <td>{contact.firstName} </td>
                        <td>{contact.lastName} </td>
                        <td>{contact.email} </td>
                        <td>{contact.phone} </td>
                        <td>
                            <button className="button button-red" onClick={()=>{
                                onDeleteClick(contact);
                            }}>Delete</button>
                        </td>
                      </tr>
                     )}
                   </tbody>
               </table>
            </div>     
       </div>
    )
}
export default Contacts;