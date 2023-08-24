import HomeSlider from './HomeSlider';
import image from '../../assets/images/mosque.png'

const Slider = () => {
    return (
        <div
            className='relative md:w-9/12 mx-auto py-20 bg-[#2e9e76] overflow-hidden rounded-2xl'
        >
            <img
                src={image}
                className='absolute w-full h-full opacity-10'
            />
            <HomeSlider />
        </div>
    );
};

export default Slider;