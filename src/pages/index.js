import * as React from "react"
import Layout from '../components/layout/layout'
import HeroBanner from "../components/hero-banner/hero-banner"
import TextWithCta from "../components/text-with-cta/text-with-cta"

const IndexPage = () => {
  return (
    <Layout>
      <HeroBanner />
      <TextWithCta />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
