import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Greetings, world!</h1>
    <p>Welcome to my new Gatsby site.</p>
    <p>Gatsby is great for building static sites, such as my Portfolio site!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to another page</Link>
  </Layout>
)

export default IndexPage
