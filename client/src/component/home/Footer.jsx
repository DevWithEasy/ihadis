import { Link } from "react-router-dom";
import logo from "../../assets/images/home-logo.png";

const Footer = () => {
    return (
        <div className="w-11/12 mx-auto py-10">
            <div className="flex space-x-3">
                <Link to="/">
                    <img src={logo} className="h-10 w-10" />
                </Link>
                <Link to="/" className="text-2xl font-medium text-[#2b9e76]">
                    আল হাদিস
                </Link>
            </div>
            <div className="grid md:grid-cols-4 md:gap-x-6 pt-5 space-y-5 md:space-y-0">
                <div className="w-full space-y-3">
                    <h3 className="text-lg font-medium">হাদিস পড়ুন, শিখুন এবং জানুন</h3>
                    <p
                        className="text-gray-500"
                    >
                        আমাদের লক্ষ্য ও উদ্দেশ্য হল সবচেয়ে উত্তম উৎস থেকে বিশুদ্ধ হাদীস
                        সকলের জন্য উন্মুক্ত করে দেয়া। আমরা এই ওয়েবসাইটটি সর্বাধিক গুরুত্বের
                        সাথে তৈরি করেছি যাতে যে কেউ সহজেই হাদিস শিখতে ও শিখাতে পারে। আমরা
                        আপনাদের একান্ত সহযোগিতা চাই এই ওয়েবসাইটটি সহ আমাদের পুরো প্রজেক্টের
                        পরিসর বাড়িয়ে এগিয়ে যেতে। আমাদের একটি মোবাইল অ্যাপ রয়েছে যাতে আপনি
                        যেকোনো স্থানে যেকোন সময় স্বাচ্ছন্দ্যে হাদীস পড়তে পারেন।
                    </p>
                </div>
                <div>
                    <div className="w-full space-y-3">
                        <h3 className="text-lg font-medium">
                            নেভিগেট
                        </h3>
                        <div
                            className="grid grid-cols-2 gap-4 text-gray-500"
                        >
                            <Link to=''>
                                হাদিস গ্রন্থসমূহ
                            </Link>

                            <Link to=''>
                                বিষয়ভিত্তিক হাদিস
                            </Link>
                            <Link to=''>
                                আমাদের প্রজেক্ট

                            </Link>
                            <Link to=''>
                                প্রাইভেসি পলিসি

                            </Link>
                            <Link to=''>
                                সাপোর্ট করুন

                            </Link>
                            <Link to=''>
                                তাহকিক

                            </Link>
                            <Link to=''>

                                লেখক

                            </Link>
                            <Link to=''>

                                ফেসবুক পেইজ
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-between">
                    <div>
                        <h3 className="text-lg font-medium">
                            আমাদের প্রজেক্ট সমূহ
                        </h3>
                        <div
                            className="grid gap-4 text-gray-500"
                        >
                            <Link to=''>
                                আল হাদিস
                            </Link>
                            <Link to=''>
                                কুরআন মাজিদ

                            </Link>
                            <Link to=''>
                                দোয়া ও রুকিয়াহ

                            </Link>
                            <Link to=''>
                                আইআরডি ফাউন্ডেশন
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium">
                            জনপ্রিয় সাইটসমূহ
                        </h3>
                        <div
                            className="grid gap-4 text-gray-500"
                        >
                            <Link to=''>
                                Quran.com
                            </Link>
                            <Link to=''>
                                Sunnah.com
                            </Link>
                            <Link to=''>
                                Islamhouse.com
                            </Link>
                            <Link to=''>
                                Response-Anti-Islam
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
