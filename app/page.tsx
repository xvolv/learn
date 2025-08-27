import AddComment from "@/components/AddComponent";
import { Comment } from "./lib/comments/comments";
import CommentList from "./components/CommentList";
export default async function Page() {
  const res = await fetch("http://localhost:3000/api/comments");
  const { comments, message } = await res.json();

  return (
    <>
      <div>Learn GET & POST</div>
      <h1>List of all comments</h1>
      <span>{message}</span>
      <ul>
        {comments.map((c: Comment) => (
          <li key={c.id}>
            {c.id} | {c.text}
          </li>
        ))}
      </ul>

      <AddComment />
      <hr />
      <hr />
      <hr />

      <CommentList />
    </>
  );
}
