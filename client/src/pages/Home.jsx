import { Book, Header, Hero, HeroMobile, Slider} from "../component/Index";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


const Home = () => {
    return (
        <div
            className="bg-gray-50"
        >
            <Header/>

            <Hero/>

            <Book {...{
                heading: 'হাদিসের বইসমূহ',
                paragraph: 'হাদিসের কিতাবগুলো মুসলিমদের জন্য হেদায়েত এবং অনুপ্রেরণার একটি গুরুত্বপূর্ণ উৎস। এই কিতাবগুলো মহানবী মুহাম্মদ (সাল্লাল্লাহু আলাইহি ওয়া সালাম)-এর সীরাত(জীবনী) ও দিক-নির্দেশনার প্রতি অন্তর্দৃষ্টি প্রদান করে।',
                data : '',
                type : 'hadis'
            }}/>

            <Slider/>

            <Book {...{
                heading: 'বিষয়ভিত্তিক হাদিস',
                paragraph: 'বিষয়ভিত্তিক হাদীস হচ্ছে হাদীসের এমন সংকলন যা বর্ণনাকারী বা সনদ দ্বারা নয় বরং বিষয় অনুসারে সজ্জিত। এর মাধ্যমে ইসলামের নির্দিষ্ট বিষয়গুলোর উপর সহজে জ্ঞানার্জন সম্ভব হয়। এই সঙ্কলন আলেমগণ ও শিক্ষকদের জন্যও সহায়ক হতে পারে যারা নির্দিষ্ট বিষয়ে শিক্ষা প্রদান করতে চাইছেন।',
                data : '',
                type : 'subject'
            }}/>

            <HeroMobile/>
        </div>
    );
};

export default Home;