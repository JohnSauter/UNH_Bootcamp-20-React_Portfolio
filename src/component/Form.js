import React, { useState } from 'react';
import './Form.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

function Form() {
  // Create state variables for the fields in the form.
  // We are also setting their initial values to an empty string.
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change.
    const { target } = e;
    const inputName = target.name;
    const inputValue = target.value;

    // Based on the input name, we set the state of either email, username, or message.
    if (inputName === 'email') {
      setEmail(inputValue);
    } else if (inputName === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. 
    // If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user 
      // can correct it.
      return;
    }
    
    alert(`Hello ${userName},` + 
      " this interface does not actually send email." + 
      "  You can email me at John_Sauter@systemeyescomputerstore.com.");

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div>
      <p>Contact</p>
      <form className="form">
      <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="your name"
          autofocus
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="your email address"
        />
       
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Write your message here."
          required
          rows="20"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
