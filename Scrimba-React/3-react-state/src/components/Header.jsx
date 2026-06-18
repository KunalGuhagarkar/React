import avatar from "/src/assets/avatar.png";

export default function Header({ username }) {
  // const [userName, setUserName] = React.useState("Joe");

  return (
    <header>
      <img src={avatar} width="50px" />
      <p>{username}</p>
    </header>
  );
}
