import * as React from "react"
import Layout from "../components/layout/layout"
import { StaticImage } from 'gatsby-plugin-image'
import { pageStyles } from "../styles/styles"

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Layout pageTitle='Home Page'>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage
          alt="This is just a random image from lorem picsum"
          src="../images/bestboy.jpeg"
        />
      </Layout>
      {/* <title>Home Page</title>
      <PageContainer />
      <Link to="/about">About</Link> */}
    </main>
  )
}

export default IndexPage
