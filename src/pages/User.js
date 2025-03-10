import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Wanderly from './Wanderly';
import { UidContext } from '../components/AppContext';


const User = () => {
    const uid = useContext(UidContext)
    
    return (
        <>

        {uid ? (
            <div>
                <Navbar />
            </div>
        ): (
            <Wanderly />
        )

        }
        </>
    );
};

export default User;