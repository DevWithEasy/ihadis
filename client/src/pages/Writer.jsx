import React, { useEffect, useState } from 'react';
import useHadithStore from '../store/useStore';
import { useParams } from 'react-router-dom'
import { FaBookOpen } from 'react-icons/fa';

const Writer = () => {
    const { id } = useParams()
    const { writers } = useHadithStore()
    const [writer] = useState(writers.find(writer => writer.id == id))
    console.log(writer)
    return (
        <div
            className="w-full md:w-9/12  pb-10 h-full md:mx-auto overflow-y-auto"
        >
            <div
                    className="hidden bg-gray-50 h-[52px] px-4 py-5 md:flex items-center space-x-2 border-b-2 text-gray-500 rounded-t-2xl"
                >
                    <FaBookOpen
                        size={20}
                    />
                    <span>&gt;</span>
                    <span className="text-sm">writers</span>
                    <span>&gt;</span>
                    <span className="text-sm">{id}</span>
                </div>
            <div
                className="p-4 m-4 md:m-0 bg-white space-y-5 rounded-xl md:rounded-b-xl md:rounded-t-none"
            >
                <p className='text-2xl font-semibold'>{writer?.name}</p>
                <div
                dangerouslySetInnerHTML={{__html : writer?.description}}
                className='text-lg'
                >

                </div>
            </div>
        </div>
    );
};

export default Writer;