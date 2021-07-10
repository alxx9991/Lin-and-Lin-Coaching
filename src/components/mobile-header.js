import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import "@fontsource/bree-serif" // Defaults to weight 400 with all styles included.
import "@fontsource/open-sans" // Defaults to weight 400 with all styles included.

const MobileHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #f6f6f6;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 600px) {
    display: none;
  }

  .invisible {
    visibility: hidden;
    margin-right: 15px;
  }

  .visible {
    margin-left: 15px;
  }
`
const MobileLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const MobileHeader = ({ siteTitle, setMenuVisible, menuVisible }) => {
  return (
    <MobileHeaderContainer>
      <StaticImage
        className="visible"
        src="../images/hamburger-menu.svg"
        alt="Hamburger menu icon"
        width={50}
        height={50}
        onClick={() => {
          setMenuVisible(!menuVisible)
        }}
      ></StaticImage>
      <MobileLogoContainer>
        <StaticImage
          src="../images/lin-logo.svg"
          alt="Lin and Lin Education Logo"
          width={80}
          height={80}
        />
      </MobileLogoContainer>
      <StaticImage
        src="../images/hamburger-menu.svg"
        alt="invisible hamburger icon"
        width={50}
        height={50}
        className="invisible"
      ></StaticImage>
    </MobileHeaderContainer>
  )
}

export default MobileHeader
