import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Video from "../components/video"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h2>Welcome to Sydney's number one HSC coaching!</h2>
    <p>
      Heres an introduction video, if you don't want to watch it then feel free
      to read the transcript below it!
    </p>
    <Video
      height="300"
      videoSrcURL="https://www.youtube.com/embed/fVL_O1AYFhI"
      videoTitle="TUNED Mercedes C63 AMG in Monaco - Burnouts & LOUD Exhaust Sounds!"
    ></Video>
    <h2>Transcript</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odit
      voluptatum blanditiis tempore ab magnam dolorem, voluptatibus reiciendis!
      Quasi, pariatur!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo
      culpa incidunt impedit maiores adipisci, illum dolor! Quo a aperiam, eum
      molestiae voluptatem voluptatibus soluta?
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ratione
      reprehenderit, blanditiis delectus laborum quisquam, id in repudiandae
      voluptate officia iusto soluta tempora alias earum? Deleniti aliquid
      tempore fugiat eos recusandae harum, accusantium pariatur autem libero,
      exercitationem suscipit mollitia placeat vero dolorem hic? Consequuntur
      corporis quos ratione! Officia, reiciendis sequi.
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis sunt
      magnam minus est obcaecati voluptas eligendi numquam pariatur excepturi
      porro nisi deleniti atque et esse necessitatibus tempora eveniet, odio
      aliquid impedit nam voluptatem exercitationem assumenda iure. Deleniti,
      dolorum! Esse, at?
    </p>
  </Layout>
)

export default IndexPage
