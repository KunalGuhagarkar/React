export default function Tabs({ children, buttons, buttonsContainer }) {
  
  console.log(buttonsContainer);

  return (
    <>
      <buttonsContainer>{buttons}</buttonsContainer>
      {children}
    </>
  );
}
