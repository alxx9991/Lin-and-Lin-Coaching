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
    <h2>HSC Extension 1 - Introduction to Vectors</h2>
    <Video
      height="300"
      videoSrcURL="https://www.youtube.com/embed/B9mD7oJscmI"
      videoTitle="Introduction to Vectors - 3U HSC (New Syllabus)"
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
