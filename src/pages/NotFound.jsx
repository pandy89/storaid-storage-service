import React from 'react'
import './NotFound.css'
import Subscribe from '../components/sections/Subscribe/Subscribe'
import Button from '@elements/Button/Button'

const NotFound = () => {
  return (
    <>
    <div className="not-found-area">
      <div className="not-found-content">
        <h5 className="not-found-subheadline">Oops!</h5>
        <h2 className="not-found-headline">Page Not Found</h2>
        <span className="not-found-text">Sorry, the page you are looking for does not exist. It may have been moved, removed altogether or is temporarily unavailable.</span>
        <div className="not-found-button"><Button name="Back to Home" /></div>
      </div>
    </div>
    <Subscribe />
    </>
  )
}

export default NotFound