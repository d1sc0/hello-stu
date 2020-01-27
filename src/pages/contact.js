import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import style from '../styles/post.module.css'

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact"
      description="Get in touch, send me a message, reach out and ask me questions!"
    />
    <div className={style.post}>
      <div className={style.postContent}>
        <h1 className={style.title}>Contact Stu</h1>
        <form
          id="fs-frm"
          name="simple-contact-form"
          accept-charset="utf-8"
          action="https://formspree.io/xlegajel"
          method="post"
        >
          <fieldset id="fs-frm-inputs" className="py-3">
            <label for="full-name" className="control-label">
              Full Name
            </label>
            <input
              type="text"
              name="full-name"
              className="form-control"
              id="full-name"
              placeholder="Enter your name here..."
              required
            />
            <label for="email-address" className="control-label">
              Email Address
            </label>
            <input
              type="email"
              name="_replyto"
              id="email-address"
              className="form-control"
              placeholder="email@domain.tld"
              required
            />
            <label for="message" className="control-label">
              Message
            </label>
            <textarea
              rows="5"
              name="message"
              id="message"
              className="form-control"
              placeholder="Enter your message here..."
              required
            ></textarea>
            <input
              type="hidden"
              name="_subject"
              className="form-control"
              id="email-subject"
              value="Contact Form Submission"
            />
          </fieldset>
          <button type="submit" class="btn btn-secondary btn-lg btn-block">
            Send
          </button>
        </form>
      </div>
    </div>
  </Layout>
)

export default ContactPage
