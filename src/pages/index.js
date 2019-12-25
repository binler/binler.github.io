import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Trang chủ" keywords={[`binlerdev`, `blog`]} />
    <h1>Hiền khùng</h1>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
    <Link to="/page1/">Trang 1</Link><br />
    <Link to="/page-2/">Trang 2</Link><br />
    <Link to="/page3/">Trang 3</Link><br />
    <Link to="/page4/">Trang 4</Link>
  </Layout>
)

export default IndexPage
