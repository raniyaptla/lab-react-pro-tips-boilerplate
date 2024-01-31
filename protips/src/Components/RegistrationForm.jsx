
import '../app.css';
import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contacts: '',
  });

  const [messages, setMessages] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contacts: '',
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setMessages((prevMessages) => ({
      ...prevMessages,
      [name]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newMessages = {};

    if (!formData.firstName.trim()) {
      newMessages.firstName = 'Please enter your first name!';
    }

    if (!formData.lastName.trim()) {
      newMessages.lastName = 'Please enter your last name!';
    }

    if (!formData.email.trim()) {
      newMessages.email = 'Please enter your email!';
    }

    if (!formData.contacts.trim() || formData.contacts.length !== 10 || isNaN(formData.contacts)) {
      newMessages.contacts = 'Invalid.Please enter a 10-digit number.';
    }

    setMessages(newMessages);

    // show success message
    if (Object.keys(newMessages).length === 0) {
      setRegistrationSuccess(true);
    }
  };

  return (
  <div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>{registrationSuccess && <h2>Registration successful!</h2>}</div>
    <div className="registration-form">
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </label>
        <p className="message">{messages.firstName}</p>

        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </label>
        <p className="message">{messages.lastName}</p>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <p className="message">{messages.email}</p>

        <label>
          Contacts:
          <input type="tel" name="contacts" value={formData.contacts} onChange={handleChange} />
        </label>
        <p className="message">{messages.contacts}</p>

        <button type="submit">Register</button>
      </form>
      
    </div>
    </div>  

  );
};

export default RegistrationForm;
