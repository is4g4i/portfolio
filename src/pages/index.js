import * as React from "react"
import Layout from "../components/layout/layout"
import { StaticImage } from 'gatsby-plugin-image'
import { global } from '../styles/global.module.scss'

const IndexPage = () => {
  return (
    <main className={global}>
      <Layout pageTitle='Home Page'>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
          alt="This is just a random image from lorem picsum"
          src="../images/bestboy.jpeg"
        />
      </Layout>
    </main>
  )
}

export default IndexPage
