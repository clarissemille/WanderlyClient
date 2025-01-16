import React, { useEffect, useState } from "react";

import person from "../assets/icons/person.svg";
import mail from "../assets/icons/mail.svg";
import lock from "../assets/icons/lock.svg";
import SignIn from "./SignIn";


const SignUp = ({ switchToSignIn }) => {
    const [formSubmit, setFormSubmit] = useState(false);
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [controlPassword, setControlPassword] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault(); // Empêche le rechargement de la page lors de l'envoi du formulaire
        // Logique de soumission (envoi des données vers le backend)
        console.log("Identifiant:", username);
        console.log("eail:", email);
        console.log("Mot de passe:", password);
    }

  return (
   <>

    {formSubmit ? (
         <>
            <SignIn />
            <span></span>
            <h4 className='success'>Enregistrement réussi, veuillez-vous connecter</h4>
         </>
    ) : (

        <>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="flex items-center space-x-2 text-white mb-2"
            htmlFor="username"
          >
            <img src={person} alt="Identifiant" />
            <span>Identifiant</span>
          </label>
          <input
            type="text"
            id="username"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            className="flex items-center space-x-2 text-white mb-2"
            htmlFor="email"
          >
            <img src={mail} alt="Email" />
            <span>Email</span>
          </label>
          <input
            type="email"
            id="email"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Mot de passe */}
        <div className="mb-4">
          <label
            className="flex items-center space-x-2 text-white mb-2"
            htmlFor="password"
          >
            <img src={lock} alt="Mot de passe" />
            <span>Mot de passe</span>
          </label>
          <input
            type="password"
            id="password"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Confirmer le mot de passe */}
        <div className="mb-6">
          <label
            className="flex items-center space-x-2 text-white mb-2"
            htmlFor="confirm-password"
          >
            <img src={lock} alt="Confirmer le mot de passe" />
            <span>Confirmer le mot de passe</span>
          </label>
          <input
            type="password"
            id="confirm-password"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-customTeal text-white rounded-lg py-2 hover:bg-blue-700 transition"
        >
          Inscription
        </button>
        </form>

        <div className="text-center mt-6">
          <span className="text-white">Vous avez déjà un compte ? </span>
          <button
            onClick={switchToSignIn}
            className="text-customTeal font-semibold hover:underline"
          >
            Se connecter
          </button>
        </div>
        </>

    )}

       
      </>
  
  );
};

export default SignUp;
