import React, { useState } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload

    const formData = new FormData(event.target);
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd3TZgfeQVTo5Kf6BN8p1mroD25YDHpOcRXGR2uG0sAhZ4vkA/formResponse";

    fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    }).then(() => {
      setSubmitted(true);
      event.target.reset(); // Clear form fields after submission
    }).catch(error => console.error("Error:", error));
  };

  return (
    <div className="contact-container">
      {submitted ? (
        <p className="success-message">✅ Thank you! Your response has been recorded.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Contact us:</h1>
          <input type="text" name="entry.2074818001" placeholder="Full Name:" required />
          <input type="email" name="entry.1021605082" placeholder="Email Address:" required />
          <input type="text" name="entry.873823422" placeholder="Institution/Organization:" required />

          <label htmlFor="dropdown">Select an Option:</label>
          <br/>
          <select name="entry.328836646" id="dropdown" required>
            <option value="" disabled selected>Area of Interest:</option>
            <option value="Decentralization">Decentralization</option>
            <option value="DeFi">DeFi</option>
            <option value="NFTs">NFTs</option>
            <option value="MiCA">MiCA</option>
            <option value="AML">AML</option>
            <option value="Tokenomics">Tokenomics</option>
            <option value="Other">Other</option>
          </select>

          <textarea name="entry.793683687" placeholder="Message:" required></textarea>
          <button type="submit"><strong>Submit</strong></button>
        </form>
      )}
    </div>
  );
};

export default Contact;