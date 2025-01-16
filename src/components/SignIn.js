import React from "react";

import person from "../assets/icons/person.svg"
import lock from "../assets/icons/lock.svg"

const SignIn = ({ switchToSignUp }) => {
  return (
    
    <div className="fixed inset-0 flex items-center justify-center">
      <div
        className="bg-gray-800 p-12 rounded-lg shadow-lg bg-opacity-50 animate-fade-in duration-1000 delay-4000 w-full max-w-lg min-h-[40vh] text-xl"
      >
        {/* Header: Tabs */}
        <div className="flex justify-around border-b pb-8 mb-8">
          <button className="text-customTeal font-bold border-b-4 border-customTeal text-2xl ">
            Se connecter
          </button>
          <button
            className="text-white text-2xl"
            onClick={switchToSignUp}
          >
            S'inscrire
          </button>
        </div>

        {/* Identifiant */}
        <div className="mb-4">
          <label
            className="flex items-center space-x-2 text-white mb-2"
            htmlFor="username"
          >
            <img src={person} alt="identifiant" />
            <span>Identifiant</span>
          </label>
          <input
            type="text"
            id="username"
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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-customTeal  text-white rounded-lg py-2 hover:bg-blue-700 transition"
        >
          Connexion
        </button>

        {/* Lien Mot de passe oublié */}
        <div className="text-center mt-4 ">
          <a href="#!" className="text-white hover:underline ">
            Mot de passe oublié ?
          </a>
        </div>

        {/* Texte inscription */}
        <div className="text-center mt-6 ">
          <span className="text-white">Vous n'avez pas de compte ?</span>
          <button
            onClick={switchToSignUp}
            className="text-customTeal  font-semibold hover:underline"
          >
            S'inscrire
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
