import React, { useEffect } from 'react';
import useHadithStore from '../store/useStore';
import axios from 'axios'
import apiUrl from '../utils/apiUrl';
import { Link } from 'react-router-dom';
import { toBengaliNumber } from 'bengali-number';

const Writers = () => {
    const {writers,addWriters} = useHadithStore()
    const getWriters = async() =>{
        try {
            const res = await axios.get(`${apiUrl}/api/book/writers`)
            if(res.data.status === 200){
                addWriters(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getWriters()
    },[])
    console.log(writers)
    return (
        <div
            className="w-full md:w-9/12 px-2 pb-10 h-full mx-auto overflow-y-auto"
        >
            <div
                className="mt-4 md:mt-0 p-4 flex flex-col md:flex-row md:justify-between items-center space-y-3 md:space-y-0 bg-white rounded-xl"
            >
                <h2
                    className="text-2xl font-medium"
                >
                    লেখক
                </h2>
            </div>
            <div
                className="grid md:grid-cols-2 gap-2 md:gap-4 py-5"
            >
                {writers &&
                    writers.map(writer =>
                        <Link to={`/writer/${writer?.id}`}
                            key={writer._id}
                            className="w-full p-5 group cursor-pointer bg-white flex justify-between items-center space-x-4 rounded-2xl transition-all duration-500"
                        >
                            <div
                                className="w-16"
                            >
                                <div
                                    className="flex justify-center items-center bg-gray-200 group-hover:bg-[#2b9e76] group-hover:text-white text-gray-400 w-12 h-12 rounded-full"
                                >
                                    {toBengaliNumber(writer?.id)}
                                </div>
                            </div>
                            <div
                                className="w-full"
                            >
                                <p
                                    className="group-hover:text-[#2b9e76] font-medium"
                                >
                                    {writer?.name}
                                </p>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Writers;