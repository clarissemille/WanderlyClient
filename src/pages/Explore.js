import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Wanderly from './Wanderly';
import { UidContext } from '../components/AppContext';
import Carousel from '../components/Explore/Carousel';

const Explore = () => {
      const uid = useContext(UidContext)
    
    return (
        <>

        {uid ? (
            <div>
                <Navbar />
                <Carousel />
            </div>
        ): (
            <Wanderly />
        )

        }
        </>
    );
};

export default Explore;