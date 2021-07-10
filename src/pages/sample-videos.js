import * as React from "react"
import Layout from "../components/layout"
import Video from "../components/video"

const SampleVideoPage = () => (
  <Layout active="sample-videos">
    <h2>Year 11 Advanced - Fundamentals of Differentiation</h2>
    <Video
      height="300"
      videoSrcURL="https://www.youtube.com/embed/klicZfiCy78"
      videoTitle="900hp Nitrous Hellcat battles 900hp Corvette! & MORE! Best of Street Racing - July's Top 10"
    ></Video>{" "}
    <h2>HSC Extension 1 - Fundamentals of Integration</h2>
    <Video
      height="300"
      videoSrcURL="https://www.youtube.com/embed/k0pHz_fLpaI"
      videoTitle="1400HP NISSAN GTR Total Car Concept *337km/h* REVIEW on AUTOBAHN by AutoTopNL"
    ></Video>{" "}
    <h2>HSC Extension 2 - 2018 HSC Challenge question</h2>
    <Video
      height="300"
      videoSrcURL="https://www.youtube.com/embed/J8vRwto8sgE"
      videoTitle="Craziest Car Crash Compilation - Best of Driving Fails [USA, CANADA, UK & MORE]"
    ></Video>{" "}
  </Layout>
)

export default SampleVideoPage
