import { useState, createContext } from "react"
import React from 'react';



export const UsersContext = createContext()

export function DefaultContext({ children }) {
    const [users, setUsers] = useState( [{
        name: "test 1",
        role: "test 2",
        department: "test 3",
        id: 1
    }]);
    return (
        <UsersContext.Provider value={{ setUsers, users }}>{children}</UsersContext.Provider>)
}