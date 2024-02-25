import { useState } from 'react'
import './form.css'

function Form() {

  const [formData, setFormData] = useState({username:"", lastname:"", email:"", phone:""})
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData))
    setIsSubmitted(true);
  }

  const validate = (values) => {
    let errors = {}
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    if (!values.username) {
      errors.username = "Please enter your first name";
    }
    if (!values.lastname) {
      errors.lastname = "Please enter your last name";
    }
    if (!values.email) {
      errors.email = "Please enter your email";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid Email Id";
    }
    if (!values.phone) {
      errors.phone = "Please enter your phone number";
    } else if (values.phone.length !== 10) {
      errors.phone = "Invalid phone number"
    }

    setIsSubmitted(Object.values(errors).every((e) => e === ""))
    return errors
  }

  return (
    <div id="container">
      <div id="formContainer">
        <div id="regStatus">{isSubmitted ? "Registration successful!" : ""}</div>
        <form onSubmit={handleSubmit}>
          <div><input name="username" type="text" placeholder='First name' value={formData.username} onChange={handleChange}/></div>
          <p>{formErrors.username}</p>
          <div><input name="lastname" type="text" placeholder='Last name' value={formData.lastname} onChange={handleChange} /></div>
          <p>{formErrors.lastname}</p>
          <div><input name="email" type="text" placeholder='Email-id' value={formData.email} onChange={handleChange} /></div>
          <p>{formErrors.email}</p>
          <div><input name="phone" type="text" placeholder='Phone Number' value={formData.phone} onChange={handleChange} /></div>
          <p>{formErrors.phone}</p>
          <div><input  id="register" type="submit" value='Register' /></div>
        </form>
      </div>
    </div>
  )
}

export default Form
