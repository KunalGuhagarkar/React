export default function Jokes({ setup, punchline }) {
  return (
    <>
      {setup && <p>Setup: {setup}</p>}
      <p>Punchline: {punchline}</p>
      <hr />
    </>
  );
}
