import React, { useEffect, useState } from "react";
import "./ContactForm.css";
// Here we import a helper function that will check if the email
// is valid
import { validateEmail } from "../utils/helpers";

function ContactForm(props) {
  // Create state variables for the fields in the form.
  // We are also setting their initial values to an empty string.
  const [email, setEmail] = useState("");
  const [email_touched, setEmail_touched] = useState(false);
  const [userName, setUserName] = useState("");
  const [userName_touched, setUserName_touched] = useState(false);
  const [message, setMessage] = useState("");
  const [message_touched, setMessage_touched] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userWarnMessage, setUserWarnMessage] = useState("");
  const [emailWarnMessage, setEmailWarnMessage] = useState("");
  const [messageWarnMessage, setMessageWarnMessage] = useState("");
  const [warnMessage, setWarnMessage] = useState("");

  /* Function to handle a change in an input field.  */
  const handleInputChange = (e) => {
    // Get the value and name of the input which triggered
    // the change.
    const { target } = e;
    const inputName = target.name;
    const inputValue = target.value;

    // Based on the input name, we set the state of either email,
    // username, or message.
    if (inputName === "email") {
      setEmail(inputValue);
    } else if (inputName === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  /* If we leave a field without filling it out,
   * warn the user that content is required.  */
  const handleInputBlur = (e) => {
    // Get the  name of the input field which triggered
    // the blur.
    const { target } = e;
    const inputName = target.name;

    // Based on the input name, we set the touched state
    // of either email, username, or message.
    if (inputName === "email") {
      setEmail_touched(true);
    } else if (inputName === "userName") {
      setUserName_touched(true);
    } else {
      setMessage_touched(true);
    }
  };

  /* Function to handle the submit operation.  */
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit
    // (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid
    // or if the userName is empty.
    // If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or username is invalid");
      // We want to exit out of this code block if something is wrong
      //  so that the user can correct it.
      return;
    }

    alert(
      `Hello ${userName},` +
        " this interface does not actually send email." +
        "  You can email me at John_Sauter@systemeyescomputerstore.com."
    );

    // If everything goes according to plan, we want to clear out
    // the input after a successful registration.
    setUserName("");
    setUserName_touched(false);
    setMessage("");
    setMessage_touched(false);
    setEmail("");
    setEmail_touched(false);
    setErrorMessage("");
  };

  /* Provide a warning message if the name field
   * has been exited without filling it in.  */

  useEffect(() => {
    if (!userName_touched || userName) {
      setUserWarnMessage("");
    } else {
      if (!userName) {
        setUserWarnMessage("Name may not be blank");
      }
    }
    let warn_message = userWarnMessage;
    if (emailWarnMessage && warn_message) {
      warn_message = warn_message + "; " + emailWarnMessage;
    } else {
      if (emailWarnMessage) {
        warn_message = emailWarnMessage;
      }
    }
    if (messageWarnMessage && warn_message) {
      warn_message = warn_message + "; " + messageWarnMessage;
    } else {
      if (messageWarnMessage) {
        warn_message = messageWarnMessage;
      }
    }
    if (warn_message) {
      warn_message = warn_message + ".";
    }
    setWarnMessage(warn_message);
  }, [
    emailWarnMessage,
    messageWarnMessage,
    userName,
    userName_touched,
    userWarnMessage,
  ]);

  /* Do the same for the email and message fields.  */
  useEffect(() => {
    if (!email_touched || email) {
      setEmailWarnMessage("");
    } else {
      if (!email) {
        setEmailWarnMessage("Email may not be blank");
      }
    }
    let warn_message = userWarnMessage;
    if (emailWarnMessage && warn_message) {
      warn_message = warn_message + "; " + emailWarnMessage;
    } else {
      if (emailWarnMessage) {
        warn_message = emailWarnMessage;
      }
    }
    if (messageWarnMessage && warn_message) {
      warn_message = warn_message + "; " + messageWarnMessage;
    } else {
      if (messageWarnMessage) {
        warn_message = messageWarnMessage;
      }
    }
    if (warn_message) {
      warn_message = warn_message + ".";
    }
    setWarnMessage(warn_message);
  }, [
    email,
    emailWarnMessage,
    email_touched,
    messageWarnMessage,
    userWarnMessage,
  ]);

  useEffect(() => {
    if (!message_touched || message) {
      setMessageWarnMessage("");
    } else {
      if (!message) {
        setMessageWarnMessage("Message may not be blank");
      }
    }
    let warn_message = userWarnMessage;
    if (emailWarnMessage && warn_message) {
      warn_message = warn_message + "; " + emailWarnMessage;
    } else {
      if (emailWarnMessage) {
        warn_message = emailWarnMessage;
      }
    }
    if (messageWarnMessage && warn_message) {
      warn_message = warn_message + "; " + messageWarnMessage;
    } else {
      if (messageWarnMessage) {
        warn_message = messageWarnMessage;
      }
    }
    if (warn_message) {
      warn_message = warn_message + ".";
    }
    setWarnMessage(warn_message);
  }, [
    emailWarnMessage,
    message,
    messageWarnMessage,
    message_touched,
    userWarnMessage,
  ]);

  return (
    <div>
      <p>Contact</p>
      <form className="form">
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          type="text"
          placeholder="your name"
          autoFocus
          required
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          type="email"
          placeholder="your email address"
        />

        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          type="text"
          placeholder="Write your message here."
          required
          rows="20"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      {warnMessage && (
        <div>
          <p className="error-text">{warnMessage}</p>
        </div>
      )}
    </div>
  );
}

export default ContactForm;

/* This is an alternative implementation of the contact form
 * using the package react-hook-form.
import { useForm } from "react-hook-form";

function ContactForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlfor="userName">Name</label>
        <input
          placeholder="Name"
          {...register("userName", { required: true })}
        />
        {errors.userName && <p>Name is required.</p>}
      </div>
      <div>
        <label htmlfor="email">Email</label>
        <input placeholder="Email" {...register("email", { required: true })} />
        {errors.email && <p>email is required.</p>}
      </div>
      <div>
        <label htmlfor="message">Message</label>
        <input
          placeholder="message"
          {...register("message", { required: true })}
        />
        {errors.message && <p>A message is required.</p>}
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
}
*/
