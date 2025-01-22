import React from "react";
import pp from "../../assets/images/pp.webp"

const InfoProfil = () => {
  return (
    <div className="flex flex-col items-center bg-white py-6 px-4 shadow-md h-[20vh]">
      {/* Photo de profil et informations */}
      <div className="flex items-center justify-between w-full max-w-xl">
        <div className="flex items-center space-x-5">
          <img
            src={pp}
            alt="Profil"
            className="w-[150px] h-[150px] rounded-full"
          />
        </div>
        <div className="flex-column">
          <div className="flex">
            <h1 className="text-xl font-bold">Clarisse</h1>
            <button className="text-sm bg-customTeal text-white py-1 px-4 rounded-lg hover:bg-teal-600">
              Modifier le profil
            </button>
          </div>
        <div className="flex">
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
      </div>

      {/* Bio */}
      <div className="mt-4 text-center">
        <p className="text-gray-600">
          Voici la bio de l'utilisateur. Parlez un peu de vous ici.
        </p>
      </div>
    </div>
    </div>
  );
};

export default InfoProfil;
