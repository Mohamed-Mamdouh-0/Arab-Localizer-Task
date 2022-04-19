import { useState, createContext } from "react"
import React from 'react';
import nextId from "react-id-generator";



export const UsersContext = createContext()

export function DefaultContext({ children }) {
    const [users, setUsers] = useState( [{
        name: "Sara Khaled Ahmed",
        role: "Hr Head",
        department: "Buisness Department",
        attendance:"Present",
        id:nextId()
    }]);
    return (
        <UsersContext.Provider value={{ setUsers, users }}>{children}</UsersContext.Provider>)
}