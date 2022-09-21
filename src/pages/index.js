import * as React from "react"
import Layout from '../components/layout/layout'
import HeroBanner from "../components/hero-banner/hero-banner"

const IndexPage = () => {
  return (
    <Layout>
      <HeroBanner />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
