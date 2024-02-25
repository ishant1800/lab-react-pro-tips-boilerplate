import { useState } from 'react'
import './form.css'

function FormA() {
  const initialState = {
    username: "",
    lastname: "",
    email: "",
    phoneno: ""
  };

  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmitted(true);
  };

  const validate = (values) => {
    let errors = {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

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
    if (!values.phoneno) {
      errors.phoneno = "Please enter your phone number";
    } else if (values.phoneno.length !== 10) {
      errors.phoneno = "Invalid phone number";
    }

    setIsSubmitted(Object.values(errors).every((e) => e === ""));
    return errors;
  };

  return (
    <div id="formContainerA">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="username"
            type="text"
            placeholder="First name"
            value={formData.username}
            onChange={handleChange}
          />
          <p>{formErrors.username}</p>
        </div>
        <div>
          <input
            name="lastname"
            type="text"
            placeholder="Last name"
            value={formData.lastname}
            onChange={handleChange}
          />
          <p>{formErrors.lastname}</p>
        </div>
        <div>
          <input
            name="email"
            type="text"
            placeholder="Email-id"
            value={formData.email}
            onChange={handleChange}
          />
          <p>{formErrors.email}</p>
        </div>
        <div>
          <input
            name="phoneno"
            type="text"
            placeholder="Phone Number"
            value={formData.phoneno}
            onChange={handleChange}
          />
          <p>{formErrors.phoneno}</p>
        </div>
        <input id="registerA" type="submit" value="Register" />
      </form>
      <div id="regStatusA">{isSubmitted ? "Registration successful!" : ""}</div>
    </div>
  );
}

export default FormA;
