export default function Tabs({ children, buttons, buttonsContainer }) {
  return (
    <>
      <buttonsContainer>{buttons}</buttonsContainer>
      {children}
    </>
  );
}
