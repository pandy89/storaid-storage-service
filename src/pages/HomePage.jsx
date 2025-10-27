import React from 'react';
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
import InputField from '../components/forms/InputField';



const HomePage = () => {

    return (        
        <>
        <HeroMainPage title="Space Simplified, Storage Perfected" subtitle="Welcome to StorAid" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor." />
        
        <AboutUs />
        <Brand />
        <OurServices />
        <Testimonials />
        <WhyUS />
        <PricePlan />
        <Booking />
        <BlogPost />
        <Subscribe />
        <InputField />
        </>
    )
}

export default HomePage