// powered by netlify forms
import React from 'react'

const ContactForm = () => {
  return (
    <div className="contact-form">
      <form name="contact" action="/success" method="POST" data-netlify="true" className="contact" data-netlify-honeypot="bot-field">
        <p>Have a question, or interested in working together?</p>
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" required/>
        <label htmlFor="message">Message</label>
        <textarea rows="6" name="message" required />
        <button type="submit">Send!</button>
      </form>
    </div>
  )
}

export default ContactForm
