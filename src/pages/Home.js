import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { UidContext } from '../components/AppContext';
import Wanderly from './Wanderly';

const Home = () => {
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

export default Home;