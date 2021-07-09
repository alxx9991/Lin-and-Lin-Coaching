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
    width: 960px;
    h2 {
      font-family: "Roboto";
      font-weight: 10;
      font-size: 28px;
    }
    h3 {
      font-family: "Open Sans";
    }
    p {
      font-family: "Open Sans";
    }
  }
`

export default ContentsContainer
