import { useState } from 'react'

const BookingForm = () => {
    

    const [formData, setFormData] = useState({name: '', email: '', selectedUnit:'', purpose: '',})
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false)

    const validateField = (name, value) => {
        let error =''
        if (name === 'name' && !/^[A-Öa-ö\s\-]{2,}$/.test(value)) {
            error = "The field must have 2 charaters."

        } else if (name === 'email' && !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(value)) {
            error = "You must enter a email address."

        } else if (name === 'selectedUnit' && !/^[A-Öa-ö0-9\s.-\d]{2,}$/.test(value)) {
            error = "The field must have 2 charaters."

        } else if (name === 'purpose' && !/^[A-Öa-ö0-9\s.-\d]{2,}$/.test(value)) {
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

        if (!/^[A-Öa-ö0-9\s.-\d]{2,}$/.test(formData.selectedUnit)){
            newErrors.selectedUnit = "You must enter a unit."
        }

        if (!/^[A-Öa-ö0-9\s.-\d]{2,}$/.test(formData.purpose)){
            newErrors.purpose = "You must enter a storage purpose."
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
            const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/booking', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if(res.ok) {
            setSubmitted(true)
            setFormData({ name: '', email:'', unit:'', purpose:'', })
        } else{
            const data = await res.json()
            console.log(data)
        }   

        }

        catch (error) {
            console.error('Network Error:', error)
        }

        } else{
            console.log('The bookingform is invalid, please see errormessage in bookingform.')
        } 
    }

    if (submitted) {
        return (
            <div className="submitted-message">
                <span className="submitted-text">We have received your booking request and will respond to you within 1-2 business days</span>
                <button className="btn submitted-button" onClick={handleOK}>New Booking</button>
            </div>
        )
    }

  return (
    <form className="bookingform-area" onSubmit={handleSubmit} noValidate>
        <div className="bookingform-content">     
            <div className="form-group" id="bookingform-name">
                <label className="required">Your Name</label>
                <input className={`bookingform-input ${errors.name ? 'input-error' : ''}`} type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" required/>
                <div className="error-message">{errors.name && errors.name}</div>
            </div>
            <div className="form-group" id="bookingform-email">
                <label className="required">Email</label>
                <input className={`bookingform-input ${errors.email ? 'input-error' : ''}`} type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required />
                <div className="error-message">{errors.email && errors.email}</div>
            </div>
            <div className="form-group" id="bookingform-unit">
                <label className="required">Choose Unit</label>
                <input className={`bookingform-input ${errors.selectedUnit ? 'input-error' : ''}`} type="text" name="selectedUnit" value={formData.selectedUnit} onChange={handleInputChange} placeholder="Choose Unit" required/>
                <div className="error-message">{errors.selectedUnit && errors.selectedUnit}</div>
            </div>
            <div className="form-group" id="bookingform-storage">
                <label className="required">Storage purpose</label>
                <textarea className={`bookingform-textarea ${errors.purpose ? 'input-error' : ''}`} type="text" name="purpose" value={formData.purpose} onChange={handleInputChange} placeholder="Describe your storage purpose so that we can match your request" required />
                <div className="error-message">{errors.purpose && errors.purpose}</div>
            </div>
            <button className="btn bookingform-button" type="submit" name="submit" aria-label="Book Unit">Book Unit</button>
        </div>        
    </form>
  )
}

export default BookingForm