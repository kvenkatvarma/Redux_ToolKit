import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let api = axios.create({
baseURL: "http://localhost:7000"
});

export const fetchContactsThunk =createAsyncThunk(
    "contaacts/fetch",
    async()=>{
        let resposne = await api.get("/contacts");
        return resposne.data;
    }
);

export const createContactsThunk =createAsyncThunk(
    "contaacts/create",
    async(newContact)=>{
        let resposne = await api({url:"/contacts",data:newContact,method:"POST"});
        return resposne.data;
    }
);

export const updateContactsThunk =createAsyncThunk(
    "contaacts/update",
    async(modifiedContact)=>{
        let resposne = await api({url:`/contacts/${modifiedContact.id}`,data:modifiedContact,method:"PUT"});
        return resposne.data;
    }
);

export const deleteContactsThunk =createAsyncThunk(
    "contaacts/remove",
    async(contactId)=>{
        let resposne = await api({url:`/contacts/${contactId}`,method:"DELETE"});
        return resposne.data;
    }
);