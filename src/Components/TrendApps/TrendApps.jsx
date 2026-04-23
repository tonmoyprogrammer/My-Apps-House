import React, { useState } from 'react';
import AllApps from '../AllApps/AllApps';
import { Link, NavLink } from 'react-router';


const TrendApps = ({getAllApps}) => {
  
    const [showApps,setShowApps] = useState(false)
    const displayApps = showApps? getAllApps: getAllApps.slice(0,8)
 
    return (
     <div className='bg-gray-100 py-15'>
     <div className="w-11/12 mx-auto">
        <div className="text-center space-y-3">
                <h2 className='text-5xl font-bold'>Trending Apps</h2>
                <p className="text-gray-400">Explore All Trending Apps on the Market developed by us</p>
         </div>
             <div className=" mt-10 grid grid-cols-1 lg:grid-cols-4 gap-5">
                 {
                    displayApps.map(apps => <AllApps key={apps.id} apps={apps}>

                    </AllApps>)
                 }
            </div>
                 <div className=" mt-10 w-max mx-auto" onClick={()=>setShowApps(!showApps)}>
                    <Link to="/apps"
                    className='btn bg-gradient-to-r px-8 px-3 from-[#7F56D9] to-[#AD7BFF] 
                    rounded-md
                     text-white'>Show all</Link>
                 </div>
         </div>
                
        </div>
    );
};

export default TrendApps;