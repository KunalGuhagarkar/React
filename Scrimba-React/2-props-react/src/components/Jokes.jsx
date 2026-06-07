export default function Jokes({ setup, punchline, upvotes, downvotes }) {
  return (
    <>
      {setup && <p>Setup: {setup}</p>}
      <p>Punchline: {punchline}</p>
      <p>Upvotes: {upvotes} Downvotes: {downvotes}</p>
      <hr />
    </>
  );
}
