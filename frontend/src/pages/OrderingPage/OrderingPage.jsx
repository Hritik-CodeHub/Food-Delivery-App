import React, { useContext, useState } from 'react';
import "./OrderingPage.css";
import Navbar from '../../components/Navbar/Navbar';
import HowItWorks from '../../components/UpperFooter/HowItWorks';
import Footer from '../../components/Footer/Footer';
import OrderingCard from '../../components/OrderingCard/OrderingCard';
import MenuList from '../../components/MenuList/MenuList';
import Basket from '../../components/Basket/Basket';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import { useEffect } from 'react';
import Loading from '../../components/Loading/Loading';

const OrderingPage = () => {
    let [search, setSearch] = useState("do");
    let [resData, setResData] = useState({});
    let [categories, setCategories] = useState([]);
    let [select, setSelect] = useState("");
    const [loading,setLoading]=useState(false);

    
     
    useEffect(() => {
        const searchByRestaurant = async () => {
            try {
                setLoading(true)
                const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/menus/search/${encodeURIComponent(search)}`);
                console.log(res);
                if (res.data.success) {
                    console.log(res.data);
                    setResData(res.data.groupedMenu);
                    setCategories(Object.keys(res.data.groupedMenu));
                }
            } catch (error) {
                console.log(error);
            }finally{
                setLoading(false)
            }
        };
        searchByRestaurant();
    },[]);

    

    return (<>
        {loading && <Loading/>}
        <Navbar />
        <div className='ord-container'>
             {categories.length > 0 && <MenuList list={categories} setSelect={setSelect}/>}
            <div className='ord-card-container'>

                {categories.length > 0 && resData[select] && resData[select].map((item, ind) => (
                    <OrderingCard  item={item} key={ind} />
                ))}
            </div>
            <Basket />
        </div>
        <HowItWorks />
        <Footer />
    </>)
}

export default OrderingPage;