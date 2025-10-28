import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from '@pages/HomePage'
import AboutUsPage from '@pages/AboutUsPage'
import ServicePage from '@pages/ServicePage'
import ContactPage from '@pages/ContactPage'
import BookingPage from '@pages/BookingPage'
import NotFound from '@pages/NotFound'

import Header from '@sections/Header/Header'
import Footer from '@sections/Footer/Footer'
import TopBar from './components/sections/TopBar/TopBar'

const App = () => {

  return (
    <>
        <BrowserRouter>
        <div className="wrapper">
          <TopBar />
            
            <main>              
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/services" element={<ServicePage />} />
                <Route path="/contacts" element={<ContactPage />} />
                <Route path="/booking" element={<BookingPage />} />     
                <Route path="*" element={<NotFound />} />
            </Routes>            
            </main>
            <Footer />
        </div>
        </BrowserRouter>
    </>
  )
}

export default App