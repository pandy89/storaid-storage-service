import React from 'react';
import PriceList from '@elements/PriceList/PriceList';
import HeroMainPage from '../components/sections/Hero/HeroMainPage';
import HeroSubPage from '../components/sections/Hero/HeroSubPage';
import AboutUs from '../components/sections/AboutUs/AboutUs';
import Brand from '../components/sections/Brand/Brand';

import OurServices from '../components/sections/OurServices/OurServices';
import ReviewCard from '../components/elements/ReviewCard/ReviewCard';
import Testimonials from '../components/sections/Testimonials/Testimonials';
import WhyUS from '../components/sections/WhyChooseUS/WhyUS';
import PricePlan from '../components/sections/PricePlan/PricePlan';
import Booking from '../components/sections/Booking/Booking';

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
        </div>
    )
}

export default HomePage