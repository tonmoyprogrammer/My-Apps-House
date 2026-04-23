import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import downloadImg from "../../../Mission-Restart-A3/assets/icon-downloads.png"
import ratingImg from "../../../Mission-Restart-A3/assets/icon-ratings.png"
import reviewImg from "../../../Mission-Restart-A3/assets/icon-review.png"

const AppDetails = () => {
    const getId = useParams();
    const pureId = parseInt(getId.id);
    const data = useLoaderData();
    const realData = data.filter(data => data.id === pureId);
    const getData = realData[0];
    console.log(getData)
    const { image, title, companyName, downloads, ratingAvg, reviews, size, ratings,description} = getData;
    const chartData = (ratings || []).map((r) => {

            const star = parseInt(r.name, 10) || 0;

            return { star, name: r.name, count: r.count };

        }).sort((a, b) => b.star - a.star);

    return (
        <div className='bg-gray-100 py-15'>
            <div className="w-11/12 mx-auto space-y-10">
                <div className="flex gap-10 items-center border-b-2 border-gray-300 
                pb-10 ">
                    <img src={image} alt="" className='w-[300px] h-[300px]' />
                    <div className="space-y-5">
                        <div className=" border-b-2 border-gray-300 pb-5">
                            <p className="text-3xl font-bold">{title}</p>
                            <p className="text-gray-400">Developed by
                                <span className='font-bold text-violet-500'> {companyName}</span></p>
                        </div>
                        <div className="flex space-x-10">
                            <div className="space-y-1">
                                <img src={downloadImg} alt="" />
                                <p className="text-gray-500">Downloads</p>
                                <p className="text-4xl font-bold">{downloads}</p>
                            </div>
                            <div className="space-y-1">
                                <img src={ratingImg} alt="" />
                                <p className="text-gray-500">Ratings</p>
                                <p className="text-4xl font-bold">{ratingAvg}</p>
                            </div>

                            <div className="space-y-1">
                                <img src={reviewImg} alt="" />
                                <p className="text-gray-500">Total Reviews</p>
                                <p className="text-4xl font-bold">{reviews}</p>
                            </div>


                        </div>
                        <button className='btn text-white bg-green-400 rounded-ms
                            '>install now ( {size} MB)</button>

                    </div>
                   
                </div>


                <div className="border-b-2 border-gray-300 pb-1">
                    
                        <div className="mt-5">
                            <p className="font-bold text-2xl text-gray-700 mb-4">Ratings</p>
                            
                            <BarChart
                                layout="vertical"
                                width={700}
                                height={300}
                                data={chartData}
                                margin={{ left: 20 }}
                            >
                          
                                <XAxis type="number" hide />

   
                                <YAxis
                                    dataKey="name"
                                    type="category"
                                    axisLine={false}
                                    tickLine={false}
                                />

                               
                                <Bar
                                    dataKey="count"
                                    fill="#FF8811"
                                    radius={[0, 10, 10, 0]}
                                    barSize={25}
                                />
                            </BarChart>
                    </div>

                </div>

                <div className="">
                    <p className="font-bold text-2xl">Description</p>
                    <div className="mt-5">
                        <p className="text-gray-600">{description}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AppDetails;