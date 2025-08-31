type Author = {
    id: number,
    name: string,
    body: string
}

import React from 'react'

const Author = async ({ userId }: { userId: number }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`);
    const user: Author = await res.json();

    return (
        <div>
            written by:{"  "}
            <span>
                {user.body}
            </span>

        </div>
    )
}

export default Author