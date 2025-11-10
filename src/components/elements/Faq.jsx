import { useState, useEffect } from 'react'
import AccordionItem from './AccordionItem'

const Faq = () => {
   const [faqs, setFaqs] = useState([])
  
    const getFaqs = async () => {
      const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/faqs')
      const data = await res.json()
      setFaqs(data)
    }
  
    useEffect(() => {
      getFaqs()
    }, [])

  return (
    <div>
      <div className="accordion__wrapper">
        <div className="questions__accordion">
            {
              faqs.map((faqs) => (
                <AccordionItem key={faqs.id} item={faqs}/>
              ))
            }
        </div>
    </div> 
    </div>
  )
}

export default Faq