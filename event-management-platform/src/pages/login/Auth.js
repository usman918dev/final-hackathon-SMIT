import React, { useState } from "react";
import "./SignupLogin.css";

const SignupLogin = () => {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div className="main">
      <input
        type="checkbox"
        id="chk"
        checked={!isSignup}
        onChange={() => setIsSignup(!isSignup)}
        aria-hidden="true"
      />

      <div className="signup">
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
          <input type="text" name="username" placeholder="User name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button>Sign up</button>
        </form>
      </div>

      <div className="login">
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default SignupLogin;
