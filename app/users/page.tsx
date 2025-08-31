"use client"
import React, { useEffect, useState } from 'react'
type User = {
    id: string,
    email: string
    username: string
}
const PageUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        async function fetchusers() {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            setUsers(data);
        }
        fetchusers();
    }, [])
    return (

        <div>
            {users.map(user => (
                <div key={user.id}>{user.id}| {user.email} | {user.username} </div> // ✅ key added
            ))}
        </div>

    )
}

export default PageUsers;