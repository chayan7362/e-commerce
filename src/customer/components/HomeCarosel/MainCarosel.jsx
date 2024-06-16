import React from "react";
import { MainCaroselData } from "./MainCaroselData";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Homepage = () => {

    const items = MainCaroselData.map((item)=> <img className='cursor-pointer' role='presentation' src={item.Image} alt=""/>)

    return (
        <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
    />
    )
};
export default Homepage;