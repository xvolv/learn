import React from 'react'
import Author from './author';
import { Suspense } from 'react';
import { Skeleton } from "@/components/ui/skeleton";
type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}
const PostsSequential = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
        throw new Error("response is not ok")
    }
    const data: Post[] = await res.json();
    const filteredPosts = data.filter((post) => post.id % 10 === 1);

    return (
        <div>
            {filteredPosts.map((post: Post) =>
            (<div key={post.id} className="p-2 border-b">
                <h3 className="font-bold">{post.title}</h3>
                <p>{post.body}</p>
                <small>User ID: {post.userId}</small>
                <Suspense fallback={<div className="text-gray-400 text-sm">  <Skeleton className="h-4 w-40 bg-red-500" /></div>}>
                    <Author userId={post.id} />
                </Suspense>
            </div>
            )

            )}
        </div>
    )
}

export default PostsSequential;