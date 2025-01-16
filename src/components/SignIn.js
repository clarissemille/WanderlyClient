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

    // Exemple de soumission d'une requête à un backend (à adapter selon votre API)
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await response.json();

      if (data.success) {
        console.log("Connexion réussie");
        // Rediriger l'utilisateur ou faire d'autres actions
      } else {
        console.log("Erreur de connexion:", data.message);
        // Gérer l'erreur, afficher un message d'erreur
      }
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div
        className="bg-gray-800 p-12 rounded-lg shadow-lg bg-opacity-50 animate-fade-in duration-1000 delay-4000 w-full max-w-lg min-h-[40vh] text-xl opacity-0"
        style={{
          animationDelay: "1s", // Délai avant l'animation
        }}
      >
        {/* Header: Tabs */}
        <div className="flex justify-around border-b pb-8 mb-8">
          <button className="text-customTeal font-bold border-b-4 border-customTeal text-2xl">
            Se connecter
          </button>
          <button
            className="text-white text-2xl"
            onClick={switchToSignUp}
          >
            S'inscrire
          </button>
        </div>

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
            className="text-customTeal font-semibold hover:underline"
          >
            S'inscrire
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
