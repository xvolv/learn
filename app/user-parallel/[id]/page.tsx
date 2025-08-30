import React from 'react'
type Post = {
    userId: number,
    id: number,
    title: string,
    body: string,
}
type Album = {
    userId: number,
    id: number,
    title: string,
}
async function getUserPosts(userId: string): Promise<Post[]> {
    const result = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("this is resolved");
        }, 2000)
    })
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    return res.json();
}
async function getUserAlbums(userId: string): Promise<Album[]> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
    return res.json();
}
const UserProfile = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const postsData = getUserPosts(id);
    const albumsData = getUserAlbums(id);
    const [posts, albums]: [Post[], Album[]] = await Promise.all([postsData, albumsData])
    return (
        <div>
            <h2 className='bg-red-500'>User Posts</h2>
            {posts.map(post => <div key={post.id}>{post.title}</div>)}

            <h2 className='bg-green-500'>User Albums</h2>
            {albums.map(album => <div key={album.id}>{album.title}</div>)}
        </div>
    )
}

export default UserProfile;