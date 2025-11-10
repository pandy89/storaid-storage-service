import { useState } from 'react'
 
const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email:'', phone:'', subject:'', comment:'' })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const validateField = (name, value) => {
        let error =''
        if (name === 'name' && !/^[A-Öa-ö\s\-]{2,}$/.test(value)) {
            error = "The field must have 2 charaters."
        } else if (name === 'email' && !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(value)) {
            error = "You must enter a email address."
        } else if (name === 'subject' && !/^[A-Öa-ö0-9\s.-\d]{2,}$/.test(value)) {
            error = "The field must have 2 charaters."
        } else if (name === 'comment' && !/^[A-Öa-ö0-9\s.-\d]{2,}$/.test(value)) {
            error = "The field must have 2 charaters."
        }

        setErrors(prevErrors => ({...prevErrors, [name]: error}))
    }
    
    const validateForm = () => {
        const newErrors = {}
        if (!/^[A-Öa-ö\s\-]{2,}$/.test(formData.name)){
            newErrors.name = "You must enter name."
        }

        if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(formData.email)){
            newErrors.email = "You must enter a valid email address."
        }

        if (!/^[A-Öa-ö0-9\s.-\d]{2,}$/.test(formData.subject)){
            newErrors.subject = "You must enter a subject."
        }

        if (!/^[A-Öa-ö0-9\s.-\d]{2,}$/.test(formData.comment)){
            newErrors.comment = "You must enter a comment/question."
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})

        validateField(name, value)
    }

    const handleOK = () => {
        setSubmitted(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (validateForm()){
        try{
            const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/contact', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if(res.ok) {
            setSubmitted(true)
            setFormData({ name: '', email:'', phone:'', subject:'', comment:'' })
        } else{
            const data = await res.json()
            console.log(data)
        }   

        }

        catch (error) {
            console.error('Network Error:', error)
        }

        } else{
            console.log('The contactform is invalid, please see errormessage in contactform.')
        } 
    }

    if (submitted) {
        return (
            <div className="submitted-message">
                <span className="submitted-text">Thank you for contacting us. We have received your message and will respond to you within 1-2 business days.</span>
                <button className="btn submitted-button" onClick={handleOK}>New Request</button>
            </div>
        )
    }    
  
    return (    
    <>
    <form className="form-area" onSubmit={handleSubmit} noValidate>
        <div className="contact-form">
            <div className="form-group" id="yourName">
                <label className="contact-form-label required" id="name">Your Name</label>
                <input className={`contact-form-input ${errors.name ? 'error' : ''}`} type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Your Name"/>
                <div className="error-message">{errors.name && errors.name}</div>
            </div>
            <div className="form-group" id="email">
                <label className="required" id="emailInput">Email</label>
                <input className={`contact-form-input ${errors.email ? 'error' : ''}`}  type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="Email" />
                <div className="error-message">{errors.email && errors.email}</div>
            </div>
            <div className="form-group" id="telephone">
                <label id="phone">Telephone</label>
                <input className={`contact-form-input ${errors.phone ? 'error' : ''}`} type="text" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Telephone" />
                <div className="error-message">{errors.phone && errors.phone}</div>
            </div>
            <div className="form-group" id="subject">
                <label className="required" id="subjectInput">Subject</label>
                <input className={`contact-form-input ${errors.subject ? 'error' : ''}`} type="text" name="subject" value={formData.subject} onChange={handleInputChange} required placeholder="Subject" />
                <div className="error-message">{errors.subject && errors.subject}</div>
            </div> 
            <div className="form-group" id="comments">
                <label className="required" id="comment">Comments / Questions</label>
                <textarea className={`contact-form-textarea ${errors.comment ? 'error' : ''}`} name="comment" value={formData.comment} onChange={handleInputChange} required placeholder="Comments" />
                <div className="error-message">{errors.comment && errors.comment}</div>
            </div>
            <button className="btn submitted-button" type="submit" name="submit">Submit</button>
        </div>
    </form>
    </>
  )
}

export default ContactForm