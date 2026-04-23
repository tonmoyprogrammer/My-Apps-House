import React from 'react';
import appsImg from "../../../Mission-Restart-A3/assets/hero.png"
const Banner = () => {
    return (
        <div className='bg-gray-100 py-15'>
            <div className="w-11/12 mx-auto text-center space-y-6">
                <h4 className='text-6xl font-bold'>We Build <br /><span
                    className='text-violet-600'>Productive </span>Apps</h4>
                <p className="text-gray-400">At HERO.IO,we craft innovative apps designed to make everyday
                    life simpler, smarter, and more exciting.<br />
                    Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className="max-w-2/11  mx-auto flex flex-col-reverse lg:flex-row gap-5">
                    <button className=" btn flex items-center gap-1 w-[200px] lg:w-auto"
                        onClick={() => window.open("https://play.google.com/store/games?hl=en")}>
                        <img src="https://i.ibb.co.com/H5L8W6N/channels4-profile.jpg" alt=""
                            className='w-[30px] h-[30px] rounded-2xl' />
                        Google Play </button>
                    <button className=" btn flex items-center gap-1 w-[200px] lg:w-auto"
                        onClick={() => window.open("https://www.apple.com/app-store/")}>
                        <img src="https://i.ibb.co.com/XxhYMp3c/playstore.png" alt=""
                            className='w-[50px] h-[30px] rounded-2xl' />
                        Google Play </button>
                </div>
                <img src={appsImg} alt="" className='mx-auto' />
            </div>
            <div className="bg-gradient-to-r from-[#7F56D9] to-[#AD7BFF] py-20 text-center
             text-white ">
                <h4 className='font-bold text-5xl'>Trusted by Millions, Built for You</h4>

                <div className=" mt-10 w-5/11 mx-auto grid grid cols-1 lg:grid-cols-3
               space-y-20 lg:space-y-0">
                    <div className="space-y-2">
                        <p className="font-extralight">Total Downloads</p>
                        <h2 className='text-6xl font-extrabold'>29.6M</h2>
                        <p className="font-extralight">21% more than last month</p>
                    </div>
                    <div className="space-y-2">
                        <p className="font-extralight">Total Reviews</p>
                        <h2 className='text-6xl font-extrabold'>906K</h2>
                        <p className="font-extralight">46% more than last month</p>
                    </div>
                    <div className="space-y-2">
                        <p className="font-extralight">Active Apps</p>
                        <h2 className='text-6xl font-extrabold'>132+</h2>
                        <p className="font-extralight">31 more will Launch</p>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Banner;