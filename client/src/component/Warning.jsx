import React from 'react';
import warning from '../assets/images/alert.png'

const Warning = ({setWarning}) => {
    const alertHide=()=>{
        localStorage.setItem('warning',JSON.stringify({warning : true}))
        setWarning(false)
    }
    return (
        <div
            className='fixed left-0 top-0 h-screen w-full flex justify-center items-start bg-black/50 z-20'
        >
            <div
                className='w-11/12 md:w-4/12 mt-24 flex flex-col justify-center items-center space-y-2 p-4 pb-10 mx-auto bg-white rounded-xl'
            >
                <img
                    src={warning}
                    className='w-20'
                />
                <p
                    className='text-2xl'
                >
                    কপিরাইট
                </p>
                <p
                    className='text-justify'
                >
                    এই প্রজেক্টটিতে নিজস্ব সার্ভার ও ডাটাবেইজ ব্যবহার করা হয়েছে। কিন্তু ডাটাবেইজের আইআরডি ফাউন্ডেশনের আল-হাদিস অ্যাপ থেকে এসকিউএল ডাটাবেইজকে মঙ্গোডিবিতে কনভার্ট করা হয়েছে। এই ডাটাবেইজের মালিক আইআরডি ফাউন্ডেশন।
                </p>
                <button
                onClick={alertHide}
                    className='px-4 py-2 bg-gray-500 text-white rounded-md'
                >
                    বন্ধ করুন
                </button>
            </div>
        </div>
    );
};

export default Warning;