import * as React from "react"
import PageContainer from "../components/pageContainer/pageContainer"
import Layout from "../components/layout/layout"
import { Link } from 'gatsby'
import { pageStyles } from "../styles/styles"

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Layout pageTitle='Home Page'>
        <p>I'm making this by following the Gatsby Tutorial.</p>
      </Layout>
      {/* <title>Home Page</title>
      <PageContainer />
      <Link to="/about">About</Link> */}
    </main>
  )
}

export default IndexPage
