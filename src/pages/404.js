import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import style from '../styles/post.module.css'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={style.post}>
      <div className={style.postContent}>
        <h1 className={style.title}>UH-OH! NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... SO MUCH sadness.</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
