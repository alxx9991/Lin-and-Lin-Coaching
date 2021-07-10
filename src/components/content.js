import styled from "styled-components"
import "@fontsource/roboto"
import "@fontsource/open-sans"

const ContentsContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  padding: 40px;
  padding-top: 10px;
  overflow-y: scroll;
  flex-shrink: 3;
  align-items: center;
  .content-inner {
    display: flex;
    flex-direction: column;
    max-width: 1080px;
    width: 100%;
    h2 {
      font-family: "Roboto";
      font-weight: 10;
      font-size: 28px;
    }

    h3 {
      font-family: "Open Sans";
      font-size: 16px;
      margin-bottom: 0;
      margin-top: 20px;
    }

    p {
      font-family: "Open Sans";
    }
    .video {
      max-width: 1080px;
      padding-top: 56.25%;
      position: relative;
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      }
    }
  }
`

export default ContentsContainer
