
function JokeComponent({setup, punchline}) {
  return (
    <>
      {setup && <p>Setup: {setup}</p>}
      <p>Punchline: {punchline}</p><br />
    </>
  );
}

export default JokeComponent;