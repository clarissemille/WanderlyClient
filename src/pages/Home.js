import React from 'react';
import Auth from '../components/Log/Auth';

const Home = () => {
    return (
        <div>
            <Auth signin={true} signup={false} />
        </div>
    );
};

export default Home;