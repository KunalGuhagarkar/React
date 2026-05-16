import PropTypes from "prop-types";

function UserGreeting(props) {
  // Using simple If/else
  // if(props.isLoggedIn) {
  //   return <h2>Hello {props.username}</h2> // isLoggedIn = true
  // }
  // // isLoggedIn = false
  // return <h2>Please Log in to Continue...</h2>

  // Using Ternary Operator
  // return props.isLoggedIn ? (
  //   <h2 className="welcome-msg">Hello {props.username}</h2>
  // ) : (
  //   <h2 className="login-prompt">Please Log in to Continue...</h2>
  // );
  // Above is very verbose

  // Better alternative
  const welcomeMsg = <h2 className="welcome-msg">Hello {props.username}</h2>;
  const loginPrompt = (
    <h2 className="login-prompt">Please Log in to Continue...</h2>
  );

  return props.isLoggedIn ? welcomeMsg : loginPrompt;
}

UserGreeting.propTypes = {
  username: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool,
};

export default UserGreeting;
