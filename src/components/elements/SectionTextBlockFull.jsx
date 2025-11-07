import React from 'react'

const SectionTextBlockFull = ({ subheadline, headline, introtext }) => {
  return (
    <>
    <h4 className="subheadline">{subheadline}</h4>
        <div className="STBF-box">
            <h3 className="headline">{headline}</h3>
            <span className="intro-text">{introtext}</span>
        </div>
    </>
  )
}

export default SectionTextBlockFull