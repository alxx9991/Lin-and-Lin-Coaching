import * as React from "react"
import Layout from "../components/layout"
import Video from "../components/video"

const AboutPage = () => (
  <Layout active="about">
    <h2>Get to know your coach!</h2>
    <p>
      There is more to know about your coach than just ATAR and other marks, so
      watch the video or read the transcript below that to learn more about me!
    </p>
    <Video
      height="300"
      videoSrcURL="https://www.youtube.com/embed/EYtFH2bFCfg"
      videoTitle="Ice Cream Tester"
    ></Video>
    <h2>Transcript</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odit
      voluptatum blanditiis tempore ab magnam dolorem, voluptatibus reiciendis!
      Quasi, pariatur!
    </p>
  </Layout>
)

export default AboutPage
