import { useState } from 'react'

const AccordionItem = ({item}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <div className="questions-answer-accordion">
        <div className={`question ${isOpen ? 'active': ''}`} onClick={toggleAccordion}>
            <span className="title-question">{item.title}</span>
            <svg className="chevron" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2"/></svg>
        </div>
        {
          isOpen && (
            <div className={`answer ${isOpen ? 'active': ''}`}>{item.description}</div>
          )
        }        
    </div>
  )
}



export default AccordionItem