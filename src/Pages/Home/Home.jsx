import React from 'react';

import { useLoaderData } from 'react-router';
import TrendApps from '../../Components/TrendApps/TrendApps';
import Banner from '../../Components/Banner/Banner';

const Home = () => {
    const getAllApps = useLoaderData();
   
    return (
        <div>
            <Banner></Banner>
             <TrendApps getAllApps={getAllApps}></TrendApps>
        </div>
    );
};

export default Home;