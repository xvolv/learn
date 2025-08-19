import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>
        <h1>welcome</h1>
        <Link href="/articles/breaking-news-123?lang=en">read in english</Link><br />
        <Link href="/articles/breaking-news-123?lang=fr">read in french</Link><br />
        <Link href="/products?catagory=book&count=2"> book </Link>
    </div>
  )
}

export default page