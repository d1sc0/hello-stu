import React from 'react'
import style from '../styles/form.module.css'
const Form = () => {
  return (
    <>
      <form
        id="fs-frm"
        name="simple-contact-form"
        accept-charset="utf-8"
        action="https://formspree.io/xlegajel"
        method="post"
      >
        <fieldset id="fs-frm-inputs">
          <label for="full-name" className={style.controllabel}>
            Full Name
          </label>
          <input
            type="text"
            name="full-name"
            className={style.formcontrol}
            id="full-name"
            placeholder="Enter your name here..."
            required
          />
          <label for="email-address" className={style.controllabel}>
            Email Address
          </label>
          <input
            type="email"
            name="_replyto"
            id="email-address"
            className={style.formcontrol}
            placeholder="email@domain.tld"
            required
          />
          <label for="message" className={style.controllabel}>
            Message
          </label>
          <textarea
            rows="3"
            name="message"
            id="message"
            className={style.formcontrol}
            placeholder="Enter your message here..."
            required
          ></textarea>
          <input
            type="hidden"
            name="_subject"
            className={style.formcontrol}
            id="email-subject"
            value="Contact Form Submission"
          />
        </fieldset>
        <button type="submit" className={style.contactbutton}>
          Send
        </button>
      </form>
    </>
  )
}

export default Form
