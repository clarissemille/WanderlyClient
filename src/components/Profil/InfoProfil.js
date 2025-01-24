import React from "react";
import pp from "../../assets/images/pp.webp";

const InfoProfil = () => {
  return (
    <div className="bg-white py-6 px-4 shadow-md w-full">
      {/* Conteneur centré */}
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Photo de profil */}
        <div className="flex-shrink-0">
          <img
            src={pp}
            alt="Profil"
            className="w-[120px] h-[120px] rounded-full"
          />
        </div>

        {/* Informations utilisateur */}
        <div className="ml-8 flex flex-col flex-grow">
          {/* Ligne 1 : Nom et bouton */}
          <div className="flex items-center space-x-4 mb-4">
            <h1 className="text-2xl font-bold">Clarisse</h1>
            <button className="text-sm bg-customTeal text-white py-1 px-4 rounded-lg hover:bg-teal-600">
              Modifier le profil
            </button>
          </div>

          {/* Ligne 2 : Stats */}
          <div className="flex justify-between mb-4 max-w-xs">
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
