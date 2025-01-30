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