import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Trang chủ" keywords={[`binlerdev`, `blog`]} />
    <h1>Hiền khùng</h1>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Trang 2</Link>
  </Layout>
)

export default IndexPage
