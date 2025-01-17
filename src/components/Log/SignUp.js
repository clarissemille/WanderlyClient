import React, { useState } from "react";

import person from "../../assets/icons/person.svg";
import mail from "../../assets/icons/mail.svg";
import lock from "../../assets/icons/lock.svg";
import SignIn from "./SignIn";
import axios from "axios";


const SignUp = ({ switchToSignIn }) => {
    const [formSubmit, setFormSubmit] = useState(false);
    const [email, setEmail] = useState("")
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [controlPassword, setControlPassword] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault(); // Empêche le rechargement de la page lors de l'envoi du formulaire
        

        const terms = document.getElementById("terms");
        const nameError = document.querySelector(".name.error")
        const emailError = document.querySelector(".email.error")
        const passwordError = document.querySelector(".password.error")
        const passwordConfirmError = document.querySelector(".password-confirm.error")
        const termsError = document.querySelector(".terms.error")

        passwordConfirmError.innerHTML="";
        termsError.innerHTML=""

        if(password !== controlPassword || !terms.checked) {
            if(password !== controlPassword) {
                passwordConfirmError.innerHTML = "Les mots de passe ne correspondent pas"
            }

            if(!terms.checked) {
                termsError.innerHTML = "Veuillez valider les conditions générales"
            }
        } else {
            await axios({
                method: "post", 
                url: `${process.env.REACT_APP_API_URL}api/user/register`,
                data: {
                    name, 
                    email,
                    password,
                }
            })
            .then((res) => {
                if(res.data.errors) {
                    nameError.innerHTML = res.data.errors.name
                    emailError.innerHTML = res.data.errors.email
                    passwordError.innerHTML = res.data.errors.password
                } else {
                    setFormSubmit(true)
                }
            })
            .catch((err) => console.log(err));
            
        }
    
    }

  return (
   <>

    {formSubmit ? (
         <>
            <h4 className='success text-customTeal m-1 '>Enregistrement réussi, veuillez-vous connecter</h4>
            <SignIn  />
         </>
    ) : (

        <>
        <form onSubmit={handleSubmit} id="sign-up-form">
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
            name="username"
            id="username"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        <div className="pseudo error text-error"></div>

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
            name="email" 
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
            <div className="email error"></div>

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
          />
            <div className=" text-error password error"></div>

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
            onChange={(e) => setControlPassword(e.target.value)}
            value={controlPassword}
          />
            <div className="text-error mt-1 password-confirm error"></div>

        </div>
        <div className="mb-6">

        <input type="checkbox"  id="terms" className="text-white"/>
        <label htmlFor="terms" className="text-white ml-2">J'accepte les <a href='/' target="_blank" rel='noopener noreferrer'>conditions générales</a></label>
        <div className="terms error text-error"></div>

        </div>
        {/* Submit Button */}
        <input
          type="submit"
          className="w-full bg-customTeal text-white rounded-lg py-2 hover:bg-blue-700 transition"
          value="Inscription"
        />
          
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
