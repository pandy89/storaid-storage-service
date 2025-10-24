import React from 'react';
import PriceList from '@elements/PriceList/PriceList';
import HeroMainPage from '../components/sections/Hero/HeroMainPage';
import AboutUs from '../components/sections/AboutUs/AboutUs';
import Brand from '../components/sections/Brand/Brand';

import OurServices from '../components/sections/OurServices/OurServices';
import Testimonials from '../components/sections/Testimonials/Testimonials';
import WhyUS from '../components/sections/WhyChooseUS/WhyUS';
import PricePlan from '../components/sections/PricePlan/PricePlan';
import Booking from '../components/sections/Booking/Booking';

import BlogPost from '../components/sections/BlogPost/BlogPost';
import Subscribe from '../components/sections/Subscribe/Subscribe';



const HomePage = () => {

    return (        
        <div>
        <HeroMainPage />
        <AboutUs />
        <Brand />
        <OurServices />
        <Testimonials />
        <WhyUS />
        <PricePlan />
        <Booking />
        <BlogPost />
        <Subscribe />
        
        </div>
    )
}

export default HomePage