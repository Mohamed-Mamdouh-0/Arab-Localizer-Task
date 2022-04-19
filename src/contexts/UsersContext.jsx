import { useState, createContext } from "react"
import React from 'react';



export const UsersContext = createContext()

export function DefaultContext({ children }) {
    const [users, setUsers] = useState( [{
        name: "Sara Khaled Ahmed",
        role: "Hr Head",
        department: "Buisness Department",
        attendance:"Present"
    }]);
    return (
        <UsersContext.Provider value={{ setUsers, users }}>{children}</UsersContext.Provider>)
}