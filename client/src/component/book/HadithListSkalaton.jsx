import { FaBookOpen } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const HadithListSkalaton = () => {
    return (
        <div
                className="w-full h-full flex flex-col rounded-2xl"
            >
                <div
                    className="bg-gray-50 h-[52px] px-4 py-5 flex items-center space-x-2 border-b-2 rounded-t-2xl"
                >
                    <FaBookOpen
                        size={20}
                        className='text-gray-200 animate-pulse'
                    />
                    <span>&gt;</span>
                    <span className="w-20 h-5 bg-gray-200 rounded-full inline-block animate-pulse"></span>
                    <span>&gt;</span>
                    <span className="w-10 h-5 bg-gray-200  rounded-full inline-block animate-pulse"></span>
                </div>
                <div
                    className="h-[cal(100%-52px)] overflow-y-auto"
                >
                    <div
                        className='mb-4 p-4 flex justify-between items-center bg-white rounded-b-lg '
                    >
                        <div className='flex items-center space-x-3 animate-pulse'>
                            <div
                                className='h-[50px] w-[50px] bg-gray-200 rounded-full'
                            >

                            </div>
                            <div className='space-y-1'>
                                <p className='h-5 w-40 bg-gray-200 rounded-full'>
                                    
                                </p>
                                <p className='h-5 w-40 bg-gray-200 rounded-full'> </p>
                            </div>
                        </div>
                        <p className='h-5 w-40 bg-gray-200 rounded-full animate-pulse'> </p>
                    </div>

                    <div
                        className='mb-3 p-4 flex items-center space-x-4 bg-white rounded-lg'
                    >
                        <div
                            className='w-10 h-10 bg-gray-200 rounded-full animate-pulse'
                        >
                            
                        </div>
                        <p className='h-5 w-40 bg-gray-200 rounded-full animate-pulse'> </p>
                    </div>


                    <div
                                    className='space-y-2'
                                >
                                    <div
                                        className='p-4 bg-white rounded-lg space-y-3'
                                    >
                                        <div
                                            className='flex items-center space-x-3'
                                        >
                                            <div
                                                className='w-[40px] h-[40px] bg-gray-200 rounded-full animate-pulse'
                                            >

                                            </div>
                                            <p className='h-5 w-40 bg-gray-200 rounded-full animate-pulse'> </p>
                                        </div>
                                        <p className='h-2 w-96 bg-gray-200 rounded-full animate-pulse'> </p>
                                    </div>
                                    <div
                                        className='p-4 space-y-4 bg-white rounded-lg'
                                    >
                                        <p className='h-5 w-40 bg-gray-200 rounded-full animate-pulse'> </p>
                                        <p className='h-2 w-full bg-gray-200 rounded-full animate-pulse'> </p>
                                        <p className='h-2 w-full bg-gray-200 rounded-full animate-pulse'> </p>
                                        <p className='h-2 w-full bg-gray-200 rounded-full animate-pulse'> </p>
                                        <p className='h-2 w-full bg-gray-200 rounded-full animate-pulse'> </p>
                                        <p className='h-2 w-full bg-gray-200 rounded-full animate-pulse'> </p>

                                    </div>
                                </div>
                </div>
            </div>
    );
};

export default HadithListSkalaton;