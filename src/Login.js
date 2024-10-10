import { useState } from "react";

function Welcome(props) {
  return <h1>Welcome {props.name}</h1>;
}

function NotLoggedIn() {
  return <h1>You must Login</h1>;
}

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let element = isLoggedIn ? <Welcome name="Ahmed" /> : <NotLoggedIn />;

  return (
    <>
      <div className="Login">
        {element}
        <button
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      </div>
    </>
  );
}

export default Login;
