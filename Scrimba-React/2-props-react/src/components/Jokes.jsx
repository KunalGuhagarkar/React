export default function Jokes({
  setup,
  punchline,
  upvotes,
  downvotes,
  comments,
  isPun,
}) {
  return (
    <>
      {setup && <p>Setup: {setup}</p>}
      <p>Punchline: {punchline}</p>
      <p>
        Upvotes: {upvotes} Downvotes: {downvotes}
      </p>
      {isPun ? <p>This is a Pun</p> : <p>This aint no Pun</p>}
      <ul>
        {comments.map((comment) => {
          <p>
            From:{comment.author}, Comment: {comment.text}
          </p>;
        })}
      </ul>
      <hr />
    </>
  );
}
