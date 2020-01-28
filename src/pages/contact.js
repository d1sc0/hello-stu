import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import style from '../styles/post.module.css'
import { Link } from 'gatsby'
const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact"
      description="Get in touch, send me a message, reach out and ask me any questions!"
    />
    <div className={style.post}>
      <div className={style.postContent}>
        <h1 className={style.title}>Contact Stu</h1>
        <p>
          If you want to get in touch then you can contact me via any of the
          social links on my <Link to="/about/">about page</Link> or if it's
          easier just submit a message using the form below! I'll try and
          respond as soon as I can.
        </p>
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
      </div>
    </div>
  </Layout>
)

export default ContactPage
