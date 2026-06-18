export default function Pad({ color }) {
  return (
    <>
      {color.map((pad) => (
        <button style={{ backgroundColor: pad.color }} key={pad.id}></button>
      ))}
    </>
  );
}
