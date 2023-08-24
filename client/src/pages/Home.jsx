import { Book, Header, Hero, HeroMobile, Slider,Footer, Category} from "../component/Index";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import axios from 'axios'
import { useEffect, useState } from "react";
import apiUrl from "../utils/apiUrl";
import GoToModal from "../component/GoToModal";


const Home = () => {
    const [open,setOpen] = useState(false)
    const [books,setBooks] = useState([])
    const [categories,setCategories] = useState([])
    const getData = async ()=>{
        try {
            const res = await axios.get(`${apiUrl}/api/book/home`)
            if(res.data.status === 200){
                setBooks(res.data.data.books)
                setCategories(res.data.data.categories)
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