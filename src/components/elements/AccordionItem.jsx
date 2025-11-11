import { useRef, useEffect } from 'react'

// ChatGPT helpt me to adding smootly open and one answer at a time.

const AccordionItem = ({ item, isOpen, onToggle }) => {
  const contentRef = useRef(null)

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.transition = 'max-height 0.3s ease'
    }
  }, [])

  return (
    <div className="questions-answer-accordion">
      <div className={`question ${isOpen ? 'active' : ''}`} onClick={onToggle}>
        <span className="title-question">{item.title}</span>
        <svg className={`chevron ${isOpen ? 'rotate-180' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      <div ref={contentRef} className="answer" style={{ overflow: 'hidden', maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',}}>
        <div className="answer-inner">{item.description}</div>
      </div>
    </div>
  )
}

export default AccordionItem