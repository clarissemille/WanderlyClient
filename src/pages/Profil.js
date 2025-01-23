import React, { useContext, useState } from "react";
import InfoProfil from "../components/Profil/InfoProfil";
import Travels from "../components/Profil/Travels";
import Map from "../components/Profil/Map";
import Messages from "../components/Profil/Messages";

// Importation des icônes (FontAwesome en exemple)
import { FaMapMarkedAlt, FaEnvelope } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { LuMessageSquareText } from "react-icons/lu";
import Navbar from "../components/Navbar";
import { UidContext } from '../components/AppContext';
import Wanderly from "./Wanderly";




const ProfilPage = () => {
  const uid = useContext(UidContext)


  const [activeTab, setActiveTab] = useState("Travels");

  const tabs = [
    { id: "Travels", label: "Travels", icon: <GiWorld /> },
    { id: "Map", label: "Map", icon: <FaMapMarkedAlt /> },
    { id: "Messages", label: "Messages", icon: <LuMessageSquareText />},
  ];

  return (
    <>
    {uid ? (

    <div className="h-screen w-screen bg-bgBlue">
      <Navbar />
      {/* Section InfoProfil */}
      <InfoProfil />

      {/* Navigation */}
      <div className="border-t border-gray-300 bg-bgBlue">
        <nav className="flex justify-around py-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center space-x-3 ${
                activeTab === tab.id ? "text-customTeal" : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <div
                className={`text-2xl ${
                  activeTab === tab.id ? "text-customTeal" : "text-gray-500"
                }`}
              >
                {tab.icon}
              </div>
              <span className="text-lg font-semibold">{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === "Travels" && <Travels />}
        {activeTab === "Map" && <Map />}
        {activeTab === "Messages" && <Messages />}
      </div>
    </div>
    ): (

      
      <Wanderly />
    )}

</>
  );
};

export default ProfilPage;
