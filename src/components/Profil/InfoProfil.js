import React from "react";
import pp from "../../assets/images/pp.webp";

const InfoProfil = () => {
  return (
    <div className="flex flex-col items-center bg-white py-6 px-4 shadow-md w-full">
      {/* Conteneur centré avec marges */}
      <div className="max-w-4xl w-full mx-auto flex items-center">
        {/* Photo de profil */}
        <div className="flex-shrink-0">
          <img
            src={pp}
            alt="Profil"
            className="w-[150px] h-[150px] rounded-full"
          />
        </div>

        {/* Informations utilisateur */}
        <div className="ml-6 flex flex-col w-full">
          {/* Ligne 1 : Nom et bouton */}
          <div className="flex items-center space-x-3 mb-4">
            <h1 className="text-2xl font-bold">Clarisse</h1>
            <button className="text-sm bg-customTeal text-white py-1 px-4 rounded-lg hover:bg-teal-600">
              Modifier le profil
            </button>
          </div>

          {/* Ligne 2 : Stats */}
          <div className="flex justify-between w-[50%] mb-4">
            <div className="text-center">
              <p className="font-bold">12</p>
              <p className="text-gray-500">Publications</p>
            </div>
            <div className="text-center">
              <p className="font-bold">256</p>
              <p className="text-gray-500">Abonnés</p>
            </div>
            <div className="text-center">
              <p className="font-bold">189</p>
              <p className="text-gray-500">Abonnements</p>
            </div>
          </div>

          {/* Ligne 3 : Bio */}
          <div>
            <p className="text-gray-600">
              Voici la bio de l'utilisateur. Parlez un peu de vous ici.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoProfil;
