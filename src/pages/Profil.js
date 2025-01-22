import React, { useState } from "react";
import InfoProfil from "../components/Profil/InfoProfil";
import Travels from "../components/Profil/Travels";
import Map from "../components/Profil/Map";
import Messages from "../components/Profil/Messages";

import travels from "../assets/icons/travels.svg"
import map from "../assets/icons/map.svg"
import messages from "../assets/icons/messages.svg"

const ProfilPage = () => {
  const [activeTab, setActiveTab] = useState("Travels");

  return (
    <div className="h-screen w-screen bg-bgBlue">
      {/* Section InfoProfil */}
      <InfoProfil />

      {/* Navigation */}
      <div className="bg-bgBlue">
        <nav className="flex text-white justify-around py-4">
          <button
            className={`text-lg font-semibold flex ${
              activeTab === "Travels" ? "text-customTeal" : "text-white"
            }`}
            onClick={() => setActiveTab("Travels")}
          >
            <img src={travels} alt="" className="fill-bgBlue"/>
            Travels
          </button>
          <button
            className={`flex text-lg font-semibold ${
              activeTab === "Map" ? "text-customTeal" : "text-white"
            }`}
            onClick={() => setActiveTab("Map")}
          >
            <img src={map} alt="" className="bgBlue" />
            Map
          </button>
          <button
            className={`flex text-lg font-semibold ${
              activeTab === "Messages" ? "text-customTeal" : "text-white"
            }`}
            onClick={() => setActiveTab("Messages")}
          >
            <img src={messages} alt="" className={`${
              activeTab === "Messages" ? "color-customTeal" : "color-white"
            }`} />
            Messages
          </button>
        </nav>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === "Travels" && <Travels />}
        {activeTab === "Map" && <Map />}
        {activeTab === "Messages" && <Messages />}
      </div>
    </div>
  );
};

export default ProfilPage;
