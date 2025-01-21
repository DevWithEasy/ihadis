import axios from 'axios';
import React, { useEffect, useState } from 'react';
import apiUrl from '../utils/apiUrl';
import { toBengaliNumber } from 'bengali-number';

const Tahkik = () => {
    const [tahkiks,setTahkiks] = useState([])
    const getValidities = async() =>{
        try {
            const res = await axios.get(`${apiUrl}/api/book/validities`)
            if(res.data.status === 200){
                setTahkiks(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getValidities()
    },[])
    
    return (
        <div
            className="w-full md:w-9/12 px-2 pb-10 h-full mx-auto space-y-4 overflow-y-auto"
        >
            <div
                className="mt-4 md:mt-0 p-4 flex flex-col md:flex-row md:justify-between items-center space-y-3 md:space-y-0 bg-white rounded-xl"
            >
                <h2
                    className="text-2xl font-medium"
                >
                    তাহকিক
                </h2>
            </div>
            {tahkiks &&
                    tahkiks.map(tahkik =>
                        <div
                            key={tahkik?._id}
                            className="w-full p-5 space-y-3 group cursor-pointer bg-white rounded-2xl transition-all duration-500"
                        >
                            <div
                                className="flex items-center space-x-3"
                            >
                                <div
                                    className="flex justify-center items-center bg-gray-200 group-hover:bg-[#2b9e76] group-hover:text-white text-gray-400 w-12 h-12 rounded-full"
                                >
                                    {toBengaliNumber(tahkik?.id)}
                                </div>
                                <p
                                    className='text-xl font-semibold'
                                >
                                    {tahkik?.title}
                                </p>
                            </div>
                            <div
                                className="w-full"
                            >
                                {tahkik?.description}
                            </div>
                        </div>
                    )
                }
        </div>
    );
};

export default Tahkik;