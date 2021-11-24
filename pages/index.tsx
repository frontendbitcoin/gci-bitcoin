import Head from "next/head";
import Layout from "components/layouts/layout";
import Hero from "components/organisms/hero";
import HowItWorks from "components/organisms/how-it-works";
import Calculator from "components/organisms/calculator";
import Comparison from "components/organisms/comparison";
import WhitePaper from "components/organisms/whitepaper";

const Index = () => (
  <Layout>
    <Head>
      <title>GCI Bitcoin | Hold Carbon Neutral BTC</title>
    </Head>
    <Hero />
    <HowItWorks />
    <WhitePaper />
    <Comparison />
    <Calculator />
  </Layout>
);

export default Index;
