import mobile from '../../assets/images/mobile.png'
import { BsApple } from 'react-icons/bs'
import { BiLogoPlayStore } from 'react-icons/bi'

const HeroMobile = () => {
    return (
        <div
            className='md:w-9/12 mx-auto p-6 flex flex-col-reverse md:flex-row justify-between bg-gradient-to-r from-white  to-[#e4f2ec] rounded-2xl'
        >
            <div
                className='md:w-7/12 flex flex-col justify-center space-y-5'
            >
                <div>
                    <h2
                        className='text-2xl md:text-4xl '
                    >
                        ডাউনলোড করুন
                    </h2>
                    <h2
                        className='text-2xl md:text-4xl '
                    >
                        আল হাদিস মোবাইল অ্যাপ
                    </h2>
                </div>
                <p className='text-gray-500'>
                    আল হাদিস অ্যাপের মাধ্যমে, হাদিস পড়া, বুকমার্ক, অনলাইন সিংকিং সহ আরও অনেক কিছু সহজেই পারবেন। এখনই আমাদের অ্যাপটি ডাউনলোড করুন!
                </p>
                <div
                    className='flex md:flex-row flex-col space-y-2 md:space-y-0 md:space-x-5'
                >
                    <div
                        className='px-4 py-2  flex justify-between items-center space-x-3 bg-[#d6f6ea] rounded-lg'
                    >
                        <BiLogoPlayStore size={30} />
                        <div
                            className='w-full text-sm'
                        >
                            <p>GET IT ON</p>
                            <p>Google play</p>
                        </div>
                    </div>
                    <div
                        className='px-4 py-2  flex justify-between items-center space-x-3 bg-[#d6f6ea] rounded-lg'
                    >
                        <BsApple size={30} />
                        <div
                            className='w-full text-sm'
                        >
                            <p>Download on the</p>
                            <p>App Store</p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className='md:w-5/12 pb-5 md:pb-0 flex justify-center md:justify-end '
            >
                <img
                    src={mobile}
                    className='h-[450px]'
                />
            </div>
        </div>
    );
};

export default HeroMobile;