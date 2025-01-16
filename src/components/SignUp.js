import React, { useEffect, useState } from "react";

import person from "../assets/icons/person.svg";
import mail from "../assets/icons/mail.svg";
import lock from "../assets/icons/lock.svg";


const SignUp = ({ switchToSignIn }) => {

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div
        className="bg-gray-800 p-12 rounded-lg shadow-lg bg-opacity-50 w-full max-w-lg min-h-[50vh] text-xl"
      >
        {/* Header: Tabs */}
        <div className="flex justify-around border-b pb-8 mb-8">
          <button
            className="text-white text-2xl"
            onClick={switchToSignIn}
          >
            Se connecter
          </button>
          <button className="text-customTeal font-bold border-b-4 border-customTeal text-2xl">
            S'inscrire
          </button>
        </div>

        {/* Identifiant */}
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

        {/* Texte connexion */}
        <div className="text-center mt-6">
          <span className="text-white">Vous avez déjà un compte ? </span>
          <button
            onClick={switchToSignIn}
            className="text-customTeal font-semibold hover:underline"
          >
            Se connecter
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
