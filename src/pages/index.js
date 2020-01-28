import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import style from '../styles/post.module.css'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Home of Stuart Mackenzie - Director of Product & Tech at FutureGov. Also known as a father, husband, occassional runner, podcaster, photographer, blogger and nice human."
    />
    <div className={style.post}>
      <div className={style.postContent}>
        <p className={style.introText}>
          Hello, I'm <Link to="/about">Stuart Mackenzie</Link>.
        </p>
        <p className={style.introText}>
          I'm the Product & Technology Director at{' '}
          <a href="https://www.wearefuturegov.com/">FutureGov</a>. I also run,
          am a keen photographer, dog lover and baker.
        </p>
        <p className={style.introText}>
          I use this site to share my personal{' '}
          <Link to="/blog">thoughts and reflections</Link> but also as a sandpit
          to prototype and test ideas in code.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
