import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import style from '../styles/post.module.css'
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaStrava,
} from 'react-icons/fa'

const AboutPage = ({ data }) => {
  const aboutImage = data.aboutImage.childImageSharp.fluid
  return (
    <Layout>
      <SEO
        title="About Stuart Mackenzie"
        description="All about Stuart Mackenzie - Director of Product & Tech at FutureGov. Also known as a father, husband, occassional runner, podcaster, photographer, blogger and nice human."
      />
      <div className={style.post}>
        <div className={style.postContent}>
          <h1 className={style.title}>Stuart Mackenzie</h1>
          <p>
            I live in <a href="https://www.visit-dorset.com/">Dorset</a> but
            spend much of my time working out of London transforming public
            services as the Product & Technology Director at{' '}
            <a href="https://wearefuturegov.com">FutureGov</a>.
          </p>
          <p>
            When not working I'm also known for being a father, husband,
            technology nerd, photographer,{' '}
            <a href="https://www.instagram.com/m0nty_d0g/">dog owner</a>,{' '}
            <a href="https://www.pomranka.net/podgoat-cover/">podcaster</a>,{' '}
            <a href="https://www.strava.com/athletes/1170885">runner</a> and
            exotic disco dancer.{' '}
          </p>
          <p>
            I use this site as a sandbox to test ideas and occassionally share
            my thoughts and reflections. Feel free to{' '}
            <Link to="/contact">contact me</Link> or connect via any of the
            profiles below.
          </p>
          <strong>Social Profiles:</strong>
          <p>
            <a href="https://twitter.com/_disco" className={style.social}>
              <FaTwitter size="1.5rem" />
            </a>
            <a
              href="https://uk.linkedin.com/in/stuartjmackenzie"
              className={style.social}
            >
              <FaLinkedin size="1.5rem" />
            </a>
            <a
              href="https://www.instagram.com/_d1sco/"
              className={style.social}
            >
              <FaInstagram size="1.5rem" />
            </a>
            <a
              href="https://www.youtube.com/user/ilovediscostu"
              className={style.social}
            >
              <FaYoutube size="1.5rem" />
            </a>
            <a href="https://github.com/d1sc0" className={style.social}>
              <FaGithub size="1.5rem" />
            </a>
            <a
              href="https://www.strava.com/athletes/1170885"
              className={style.social}
            >
              <FaStrava size="1.5rem" />
            </a>
          </p>
          <Image
            fluid={aboutImage}
            className="about-image rounded"
            alt="Stuart Mackenzie"
          />
        </div>
      </div>
    </Layout>
  )
}

export const data = graphql`
  query {
    aboutImage: file(relativePath: { eq: "hellostu.jpg" }) {
      childImageSharp {
        fluid(grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AboutPage
