import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import logo from "../assets/images/logo.png"; // Remplacez avec le chemin de votre logo
import profilePic from "../assets/images/pp.webp"; // Remplacez avec la photo de profil par défaut ou dynamique
import axios from "axios";
import cookie from "js-cookie"


const Navbar = () => {
  const navigate = useNavigate();

  const removeCookie = (key) => {
    if (window !== "undefined") {
        cookie.remove(key, {expires: 1})
    }
}
const logout = async () => {
    await axios ({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}api/user/logout`,
        withCredentials: true
})
    .then(() => removeCookie("jwt"))
    .catch((err) => console.log(err))

    window.location = "/"
}

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    console.log("Recherche :", query);
    // Redirige ou effectue une recherche selon la logique
  };

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <img
          src={logo}
          alt="Logo"
          className="h-20 cursor-pointer"
          onClick={() => navigate("/home")}
        />
      </div>

      {/* Barre de recherche */}
      <form
        onSubmit={handleSearch}
        className="flex items-center bg-gray-200 rounded-full px-4 py-2 w-1/2 max-w-md"
      >
        <input
          type="text"
          name="search"
          placeholder="Rechercher..."
          className="flex-grow bg-transparent focus:outline-none px-2 text-gray-700"
        />
        <button type="submit" className="text-gray-500 hover:text-gray-700">
          <FaSearch size={18} />
        </button>
      </form>

      {/* Liens et actions */}
      <div className="flex items-center space-x-6">
        {/* Lien vers Explore */}
        <button
          className="text-gray-700 hover:text-customTeal font-semibold"
          onClick={() => navigate("/explore")}
        >
          Explore
        </button>

        {/* Bouton de déconnexion */}
        <button
          className="text-gray-700 hover:text-red-500"
          onClick={logout}
          title="Se déconnecter"
        >
          <FaSignOutAlt size={22} />
        </button>

        {/* Photo de profil */}
        <img
          src={profilePic} // Remplacez avec une photo dynamique si disponible
          alt="Profil"
          className="h-10 w-10 rounded-full object-cover cursor-pointer"
          onClick={() => navigate("/profil")}
        />
      </div>
    </nav>
  );
};

export default Navbar;
