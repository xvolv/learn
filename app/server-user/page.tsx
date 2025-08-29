import React from 'react'
type User = {
    id: string,
    email: string
    username: string
}
const page = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        next: { revalidate: 60 }
    });
    if (!res.ok) {

        throw new Error("failed to fetch users")
    }
    const data: User[] = await res.json();

    return (
        <div>
            <ul>
                {data.map((user: User) => <li key={user.id}>{user.email}</li>)}

            </ul>
        </div>
    )
}

export default page