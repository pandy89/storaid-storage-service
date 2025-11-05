import React from 'react'

const SectionTextBlock = ({ subheadline, headline, introtext }) => {
  return (
    <>
        <h4 className="subheadline">{subheadline}</h4>
        <h3 className="headline">{headline}</h3>
        <span className="intro-text">{introtext}</span>
    </>
  )
}

export default SectionTextBlock