import React from "react";
import "../../store";
import { useSelector } from "react-redux";

function Contacts(){

   let contacts = useSelector(state=>state.contacts);

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
                        <input type="text" placeholder="First Name" className="form-control"></input>
                    </div> 
                   
                    <div className="form-group">
                        <input type="text" placeholder="Last Name" className="form-control"></input>
                    </div> 

                    <div className="form-group">
                        <input type="email" placeholder="Email" className="form-control"></input>
                    </div> 

                    <div className="form-group">
                        <input type="text" placeholder="Phone" className="form-control"></input>
                    </div> 
                  
                    <button className="button button-green">Save</button>
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
                            <button className="button button-red">Delete</button>
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