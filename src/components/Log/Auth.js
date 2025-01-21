import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";


const Auth = () => {
    const [signInModal, setSignInModal] = useState(true)
    const [signUpModal, setSignUpModal] = useState(false)

    const handleModals = (e) => {
        if (e.target.id === "login") {
            setSignInModal(true); 
            setSignUpModal(false); 
        } else if (e.target.id === "register") {
            setSignUpModal(true)
            setSignInModal(false)
        }
    }


  return (

    <div className="fixed inset-0 flex items-center justify-center">
    <div
      className="bg-gray-800 p-12 rounded-lg shadow-lg bg-opacity-50 animate-fade-in duration-1000 delay-4000 w-full max-w-lg min-h-[40vh] text-xl opacity-0"
      id="login"
      style={{
        animationDelay: "1s", 
      }}
    >
      {/* Header: Tabs */}
      <div className="flex justify-around border-b pb-8 mb-8">
        <button 
            className={signInModal ? "text-customTeal font-bold border-b-4 border-customTeal  text-2xl" : "text-white  text-2xl" }
            id="login"
            onClick={handleModals}
        >
          Se connecter
        </button>
        <button
          className={signUpModal ? "text-customTeal font-bold border-b-4 border-customTeal  text-2xl" : "text-white  text-2xl" }
          onClick={handleModals}
          id="register"
        >
          S'inscrire
        </button>
      </div>

        {signInModal && <SignIn />}
        {signUpModal && <SignUp />}

      </div>
      </div>



  );
};

export default Auth;





