import React from 'react';
import PriceList from '@elements/PriceList/PriceList';
import HeroMainPage from '../components/sections/Hero/HeroMainPage';
import HeroSubPage from '../components/sections/Hero/HeroSubPage';
import AboutUs from '../components/sections/AboutUs/AboutUs';
import Brand from '../components/sections/Brand/Brand';

import OurServices from '../components/sections/OurServices/OurServices';
import ReviewCard from '../components/elements/ReviewCard/ReviewCard';

const HomePage = () => {

    return (        
        <div>
        <HeroMainPage />
        <AboutUs />
        <Brand />
        <OurServices />
        <ReviewCard />
        </div>
    )
}

export default HomePage