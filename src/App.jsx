
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from '@pages/HomePage'
import ContactPage from '@pages/ContactPage'
import ServicePage from '@pages/ServicePage'
import NotFound from '@pages/NotFound'

import Header from '@sections/Header/Header'
import Footer from '@sections/Footer/Footer'

const App = () => {
    // const [] - States (useState) sätts här. Filer eller enklare texter. Språk, knappar, formulär, aktuellt tillstånd osv.

  return (
    <>
        <BrowserRouter>
        <div className="wrapper">
            <Header />
            <main>
              
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contacts" element={<ContactPage />} />
                <Route path="/services" element={<ServicePage />} />
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