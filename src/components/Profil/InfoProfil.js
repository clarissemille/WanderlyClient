import React from 'react';
import pp from "../../assets/images/pp.webp"
import "../../styles/pages/profil.css"

const InfoProfil = () => {
    return (
        <div className='infos'>
            <div className='photo'>
                <img className='pp' src={pp} alt="photo profil" />
            </div>
            <div className='infosProfil'>
                <div className='name'>
                    <h1>Name</h1>
                    <button>Modifier le profil</button>
                </div>
                <div className='stats'>
                    <p>100 publications</p>
                    <p>100 abonnés</p>
                    <p>100 abonnements</p>
                </div>
                <div className='bio'>
                    <p>Hello</p>
                    <p>Bali</p>
                    <p>🇫🇷</p>
                </div>
            </div>
        </div>
    );
};

export default InfoProfil;