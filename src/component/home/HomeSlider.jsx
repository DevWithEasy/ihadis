import settings from "../../utils/sliderSetting";
import Slider from "react-slick";

const HomeSlider = () => {
    return (
        <div
            className='w-9/12 md:w-6/12 mx-auto overflow-hidden md:text-xl text-white dark:text-gray-300'
        >
            <Slider {...settings}>
                <div
                className="space-y-5"
                >
                    <p className="leading-10">
                        এ মর্মে আল্লাহ তা’আলার বাণীঃ “নিশ্চয়ই আমি আপনার প্রতি সেরূপ ওয়াহী প্রেরণ করেছি যেরূপ নূহ ও তাঁর পরবর্তী নবীদের প্রতি ওয়াহী প্রেরণ করেছিলাম”।
                    </p>
                    <p className="text-center">
                        (সূরা আন-নিসা ৪/১৬৩)
                    </p>
                </div>
                <div
                    className="space-y-5"
                >
                    <p className="leading-10">
                        এ মর্মে আল্লাহ তা’আলার বাণীঃ “নিশ্চয়ই আমি আপনার প্রতি সেরূপ ওয়াহী প্রেরণ করেছি যেরূপ নূহ ও তাঁর পরবর্তী নবীদের প্রতি ওয়াহী প্রেরণ করেছিলাম”।
                    </p>
                    <p className="text-center">
                        (সূরা আন-নিসা ৪/১৬৩)
                    </p>
                </div>
                <div
                className="space-y-5"
                >
                    <p className="leading-10">
                        এ মর্মে আল্লাহ তা’আলার বাণীঃ “নিশ্চয়ই আমি আপনার প্রতি সেরূপ ওয়াহী প্রেরণ করেছি যেরূপ নূহ ও তাঁর পরবর্তী নবীদের প্রতি ওয়াহী প্রেরণ করেছিলাম”।
                    </p>
                    <p className="text-center">
                        (সূরা আন-নিসা ৪/১৬৩)
                    </p>
                </div>
            </Slider>
        </div>
    );
};

export default HomeSlider;