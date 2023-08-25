import axios from 'axios';
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import GoToModal from "../component/GoToModal";
import { Book, Head,Category, Footer, Header, Hero, HeroMobile, Slider } from "../component/Index";
import useHadithStore from "../store/useStore";
import apiUrl from "../utils/apiUrl";


const Home = () => {
    const [open,setOpen] = useState(false)
    const {books,categories,addBookSub} = useHadithStore()
    const getData = async ()=>{
        try {
            const res = await axios.get(`${apiUrl}/api/book/home`)
            if(res.data.status === 200){
                addBookSub(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getData()
    },[])
    
    return (
        <div
            className="bg-gray-50"
        >
            <Head {...{
                title : 'iHadith - Read Hadith Online'
            }}/>

            <Header {...{open,setOpen}}/>

            <Hero/>

            <Book {...{
                books
            }}/>

            <Slider/>

            <Category {...{
                categories
            }}/>

            <HeroMobile/>
            <Footer/>
            {open &&
                <GoToModal {...{open,setOpen,books}}/>
            }
        </div>
    );
};

export default Home;