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

const App = () => {

  return (
    <BrowserRouter>
        <div className="wrapper">
          <Header />
            <main>              
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/services" element={<ServicePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/booking" element={<BookingPage />} />     
                <Route path="/notfound" element={<NotFound />} />
            </Routes>            
            </main>
            <Footer />
        </div>
    </BrowserRouter>
  )
}

export default App