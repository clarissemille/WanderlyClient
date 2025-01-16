import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const switchToSignIn = () => {
    setIsSignUp(false);
  };

  const switchToSignUp = () => {
    setIsSignUp(true);
  };

  return (
    <div>
      {isSignUp ? (
        <SignUp switchToSignIn={switchToSignIn} />
      ) : (
        <SignIn switchToSignUp={switchToSignUp} />
      )}
    </div>
  );
};

export default Auth;
