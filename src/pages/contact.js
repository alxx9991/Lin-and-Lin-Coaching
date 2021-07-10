import * as React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const ContactDetailsWrapper = styled.div`
  background-color: #f6f6f6;
  padding: 20px;
  padding-top: 0px;
`

const ContactPage = () => (
  <Layout active="contact">
    <h2>Contact Me</h2>
    <p>
      If you are interested in having lessons with me, feel free to send me a
      message and we can discuss a suitable time and location for a free trial
      lesson!
    </p>
    <ContactDetailsWrapper>
      <h3>Location</h3>
      North Ryde
      <h3>Email</h3>
      alex.lin9991@gmail.com
      <h3>Mobile Number</h3>
      0466 260 806 - If I don't pick up, shoot me a text message and I will
      reply as soon as possible!
    </ContactDetailsWrapper>
  </Layout>
)

export default ContactPage
