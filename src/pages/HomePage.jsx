import HeroMainPage from '../components/sections/HeroMainPage'
import AboutUs from '../components/sections/AboutUs'
import Brands from '../components/sections/Brands'
import OurServices from '../components/sections/OurServices'
import Testimonials from '../components/sections/Testimonials'
import WhyUs from '../components/sections/WhyUs'
import PricePlan from '../components/sections/PricePlan'
import BookStorage from '../components/sections/BookStorage'
import BlogPost from '../components/sections/BlogPost'
import Subscribe from '../components/sections/Subscribe'
import FaqSection from '../components/sections/FaqSection'

const HomePage = () => {

    return (        
        <>
        <HeroMainPage title="Space Simplified, Storage Perfected" subtitle="Welcome to StorAid" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor." />
        <AboutUs />
        <Brands />
        <OurServices />
        <Testimonials />
        <FaqSection />
        <WhyUs />
        <PricePlan />
        <BookStorage />
        <BlogPost />
        <Subscribe />
        </>
    )
}

export default HomePage