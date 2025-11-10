import { useState } from 'react'

const Subscribe = () => {
    const [formData, setFormData] = useState({name: '', email: '', selectedUnit:'', purpose: '',})
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false)
    const [submittedEmail, setSubmittedEmail] = useState('')

    const validateField = (name, value) => {
        let error =''
        
        if (name === 'email' && !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(value)) {
            error = "You must enter a email address. (e.g exempel@domain.com)"
        } 

        setErrors(prevErrors => ({...prevErrors, [name]: error}))
    }

    const validateForm = () => {
        const newErrors = {}
        
        if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(formData.email)){
            newErrors.email = "You must enter a valid email address. (e.g exempel@domain.com)"
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
        setSubmittedEmail('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (validateForm()){
        try{
            const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/subscribe', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if(res.ok) {
            setSubmittedEmail(formData.email)
            setSubmitted(true)
            setFormData({ email:'' })
        } else{
            const data = await res.json()
            console.log(data)
        }   

        }

        catch (error) {
            console.error('Network Error:', error)
        }

        } else{
            console.log('The subscribeform is invalid, please see errormessage in subscribeform.')
        } 
    }

    if (submitted) {
        return (
            <div className="submitted-message">
                <span className="submitted-text">{submittedEmail} was successfully registered to the newsletter list.</span>
                <button className="btn submitted-button" onClick={handleOK}>New Subscribe</button>
            </div>
        )
    }

  return (
    <section className="subscribe">
        <div className="container">
            <div className="subscribe-area">
                <div className="subscribe-content">
                    <h3>Subscribe Our Newletter</h3>
                    <span>Subscribe to our newsletter to receive early discount offers, updates and info</span>
                </div>
                <form className="subscribe-form-area" onSubmit={handleSubmit} noValidate>
                    <div className="form-group" id="subscribeform-email">                    
                      <input className={`subscribeform-input ${errors.email ? 'input-error' : ''}`} type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="Enter your email address *" />
                      <div className="error-message">{errors.email && errors.email}</div>
                    </div>
                    <button className="btn subscribeform-button" type="submit" name="submit">Subscribe</button>
                  </form>
            </div>
        </div>
    </section>
  )
}

export default Subscribe