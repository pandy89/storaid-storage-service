import { useState } from "react"
import arrow from '/icons/arrow-right-yellow.svg'

const Expandable = ({children, maxChars=150 }) => {

  let [expanded, setExpanded] = useState(true)

  if (children.length <= maxChars) return <span>{children}</span>

  let text = expanded ? children.substring(0, maxChars) : children

  return (
    <>
    <span>{text}{expanded && ' ...'}</span>
    <button className="postcard-button" onClick = { ()=> setExpanded(!expanded) }>{expanded ? "Read more": "Read less"}<img src={arrow} alt="Arrow icon to read more about a Blogpost or Newspost" /></button> 
    </>
  )
}

export default Expandable