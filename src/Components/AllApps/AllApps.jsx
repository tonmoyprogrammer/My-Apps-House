import React from 'react';
import downloadImg from"../../../Mission-Restart-A3/assets/icon-downloads.png"
import ratings from "../../../Mission-Restart-A3/assets/icon-ratings.png"
import { Link } from 'react-router';

const AllApps = ({ apps }) => {
 
   
    const { image, downloads,companyName, ratingAvg,id } = apps;
   
    return (
        <Link to={`/appdetails/${id}`}>
        <div className='bg-white p-7 rounded-2xl space-y-5 shadow-md'>
            <div className="">
                <img src={image} alt="" className='w-[150px] h-[150px] mx-auto'/>
            </div>
            <div className="">
                <h3 className='font-semibold text-2xl text-center lg:text-left'>{companyName}</h3>
            </div>
            <div className="grid grid-cols-2  justify-between gap-12">
                <div className="flex gap-2 items-center   bg-gray-100 rounded-sm text-center">
                    <img src={downloadImg} alt="" className="w-[20px] h-[20px] ml-2" />
                    <p className="font-semibold text-[#00D390] mr-3">{downloads}</p>
                </div>
                <div className="flex gap-2 items-center py-2 px-5 bg-[#FFF0E1] rounded-sm ">
                 <img src={ratings} alt="" className="w-[20px] h-[20px]" />
                    <p className="font-semibold text-[#FF8811] ">{ratingAvg}</p>
                </div>
            </div>

        </div>
        </Link>
    );
};

export default AllApps;