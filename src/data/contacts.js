import { v1 as uuid } from "uuid";

let contactsInitialState =[
    {
        id: uuid(),
        firstName : "Venkat",
        lastName: "Varma",
        email : "abc@gmail.com",
        phone:"123456"
    },
    {
        id: uuid(),
        firstName : "Durga",
        lastName: "Varma",
        email : "dur@gmail.com",
        phone:"434344"
    },
    {
        id: uuid(),
        firstName : "Nitya",
        lastName: "Varma",
        email : "sri@gmail.com",
        phone:"87878887"
    },
    {
        id: uuid(),
        firstName : "abc",
        lastName: "Varma",
        email : "abc@gmail.com",
        phone:"12345545456"
    },
    {
        id: uuid(),
        firstName : "def",
        lastName: "Varma",
        email : "def@gmail.com",
        phone:"8788878"
    }
];
export default contactsInitialState;