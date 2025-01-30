import React,{useState,useEffect} from "react";
import "../../store";
import { useSelector,useDispatch } from "react-redux";
import {add,remove,update} from "../../slices/contacts";
import { v1 as uuid } from "uuid";
import { fetchContactsThunk } from "../../thunks/contacts";

function Contacts(){

  
   let [firstName,setFirstName] =useState("");
   let [lastName,setLastName] =useState("");
   let [email,setEmail] =useState("");
   let [phone,setPhone] =useState("");

   let [editId,setEditId] = useState("");
   let [editfirstName,setEditFirstName] =useState("");
   let [editlastName,setEditLastName] =useState("");
   let [editemail,setEditEmail] =useState("");
   let [editphone,setEditPhone] =useState("");

   let dispatch = useDispatch();

   useEffect(()=>{
       dispatch(fetchContactsThunk());
   },[dispatch])
   let contacts = useSelector(state=>state.contacts);
   let onAddClick=()=>{
        dispatch(add({
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
            dispatch(remove(contact.id));
         }
   };
   let onEditClick =(contact)=>{
     setEditId(contact.id);
     setEditFirstName(contact.firstName);
     setEditLastName(contact.lastName);
     setEditEmail(contact.email);
     setEditPhone(contact.phone);

   };

   let onUpdateClick =()=>{
       dispatch(update({
         id:editId,
         firstName:editfirstName,
         lastName:editlastName,
         email:editemail,
         phone:editphone
       }));
       setEditId("");
   };
    return(
       <div className="container">
          <h4 className="grid-header">
             Contacts
             {contacts.status == 'pending' ? <i className="fas fa-spinner fa-spin"></i> : ""}
             <span className="text-red">{contacts.error?.message};
             </span>
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
                     {contacts.data.map((contact,index)=>
                    <tr key={contact.id}>
                        <td>{index +1} </td>
                        <td>
                            {editId == contact.id ? <input type="text" placeholder="First Name" className="form-control" value={editfirstName} onChange={(event)=>{
                                setEditFirstName(event.target.value);
                            }}></input>:<span>{contact.firstName}</span>}
                            
                        </td>
                        <td>
                            {editId == contact.id ? <input type="text" placeholder="Last Name" className="form-control" value={editlastName} onChange={(event)=>{
                                setEditLastName(event.target.value);
                            }}></input>:<span>{contact.lastName}</span>}
                            
                        </td>
                        <td>
                            {editId == contact.id ? <input type="text" placeholder="Email" className="form-control" value={editemail} onChange={(event)=>{
                                setEditEmail(event.target.value);
                            }}></input>:<span>{contact.email}</span>}
                            
                        </td>
                        <td>
                            {editId == contact.id ? <input type="text" placeholder="Phone" className="form-control" value={editphone} onChange={(event)=>{
                                setEditPhone(event.target.value);
                            }}></input>:<span>{contact.phone}</span>}
                            
                        </td>
                        <td>
                        {editId == contact.id ? <button className="button button-green" onClick={()=>{
                                onUpdateClick();
                            }}>Update</button>:    <button className="button button-green" onClick={()=>{
                                onEditClick(contact);
                            }}>Edit</button>}
                     
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