export default function Pad({ color }) {
  return (
    <>
      {color.map((pad) => (
        <button
          style={{ backgroundColor: pad.color }}
          className={pad.on && "on"}
          key={pad.id}
        ></button>
      ))}
    </>
  );
}
