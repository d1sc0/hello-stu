import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import style from "../styles/post.module.css"

const ContactPage = () => (
  <Layout>
    <SEO 
    title="contact" 
    description="Get in touch, send me a message, reach out and ask me questions!"
    />
    <div className={style.post}>
      <div className={style.postContent}>
        <h1 className={style.title}>Contact Stu</h1>
        <p>Contact form coming soon</p>
      </div>
    </div>
  </Layout>
)

export default ContactPage
