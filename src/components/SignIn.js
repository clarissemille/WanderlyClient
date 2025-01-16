import React, { useState } from "react";
import person from "../assets/icons/person.svg";
import lock from "../assets/icons/lock.svg";

const SignIn = ({ switchToSignUp }) => {
  // États pour les champs du formulaire
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de l'envoi du formulaire
    // Logique de soumission (envoi des données vers le backend)
    console.log("Identifiant:", username);
    console.log("Mot de passe:", password);
  }

  return (
    
        <div>

        {/* Formulaire de Connexion */}
        <form onSubmit={handleSubmit}>
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
              value={username} // Lier la valeur au state
              onChange={(e) => setUsername(e.target.value)} // Mettre à jour l'état lors de la saisie
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
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
              value={password} // Lier la valeur au state
              onChange={(e) => setPassword(e.target.value)} // Mettre à jour l'état lors de la saisie
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-customTeal text-white rounded-lg py-2 hover:bg-blue-700 transition"
          >
            Connexion
          </button>
        </form>

        <div className="text-center mt-4 ">
          <a href="#!" className="text-white hover:underline ">
            Mot de passe oublié ?
          </a>
        </div>

       
        <div className="text-center mt-6 ">
          <span className="text-white">Vous n'avez pas de compte ? </span>
          <button
            onClick={switchToSignUp}
            className="text-customTeal font-semibold hover:underline"
          >
            S'inscrire
          </button>
        </div>
      </div>
    
  );
};

export default SignIn;
