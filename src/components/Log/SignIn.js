import React, { useState } from "react";
import person from "../../assets/icons/person.svg";
import lock from "../../assets/icons/lock.svg";
import axios from "axios";

const SignIn = ({ switchToSignUp }) => {
  // États pour les champs du formulaire
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // Gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de l'envoi du formulaire
   

    const nameError = document.querySelector(".name.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: {
          name, 
          password,
      }
  })
  .then((res) => {
      if(res.data.errors){
          nameError.innerHTML = res.data.errors.name;
          passwordError.innerHTML = res.data.errors.password;
      } else {
          window.location = "/profil"
      }
  })
  .catch((err) => {
      console.log(err);
      
  })
  }

  return (
    
        <div>
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
              name="username"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <div className="name error text-error"></div>

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
              name="password"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
              onChange={(e) => setPassword(e.target.value)} 
              value={password} 
              required
            />
            <div className="password error text-error"></div>

          </div>

          {/* Submit Button */}
          <input
            type="submit"
            className="w-full bg-customTeal text-white rounded-lg py-2 hover:bg-blue-700 transition"
            value="Connexion"
          />
           
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
