import { useState, useEffect } from 'react'
import AccordionItem from './AccordionItem'

const Faq = () => {
   const [faqs, setFaqs] = useState([])
   const [openIndex, setOpenIndex] = useState(null)
  
    const getFaqs = async () => {
      const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/faqs')
      const data = await res.json()
      setFaqs(data)
    }
  
    useEffect(() => {
      getFaqs()
    }, [])

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div>
      <div className="accordion-wrapper">
        <div className="questions-accordion">
            {
              faqs.map((faqs, index) => (
                <AccordionItem key={faqs.id} item={faqs} isOpen={openIndex === index} onToggle={() => handleToggle(index)}/>
              ))
            }
        </div>
    </div> 
    </div>
  )
}

export default Faq