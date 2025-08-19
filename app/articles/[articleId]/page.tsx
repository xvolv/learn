import React from "react";
import Link from "next/link";

const page = async ({ params }: { params: Promise<{ articleId: string }> }) => {
   const {articleId} = await params;
    return (
    
    <div>
      <h1>news article  {articleId}</h1>
      <p>reading in language</p>
      <div>
        <Link href="/articles/id?lang=en">english</Link><br />
        <Link href="/articles/id?lang=fr">french</Link><br />
        <Link href="/articles/id?lang=es">spanish</Link><br />
      </div>
    </div>
  );
};

export default page;
