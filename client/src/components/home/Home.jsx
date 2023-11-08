import { useEffect } from "react";
import { Fragment } from "react";

import NavBar from "./NavBar";
import Banner from'./Banner';
import {Box,styled} from '@mui/material';
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch,useSelector } from "react-redux";
import Slide from "./Slide";
// import MidSlide from "./MidSlide";
import MidSection from "./MidSection";
import MidSlide from "./MidSlide";
const Component=styled(Box)` 
    padding:10px;
    background:#F2F2F2;
`
const Home=()=>{

    const {products}= useSelector(state=>state.getProducts)
    console.log(products);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch])
    return(
        <Fragment>
            <NavBar/>
            <Component>
            <Banner/>
            <MidSlide products={products}title="Deal of the Day" timer={true}/>
            <MidSection/>
            <Slide products={products}title="Discounts for you"timer={false}/>
            <Slide products={products}title="Suggestion Items"timer={false}/>
            <Slide products={products}title="Top Selection"timer={false}/>
            <Slide products={products}title="Recommended Items" timer={false}/>
            <Slide products={products}title="Trending Offers" timer={false}/>
            <Slide products={products}title="Season Top Picks" timer={false}/>

            </Component>

        </Fragment>
    )
}
export default Home;

