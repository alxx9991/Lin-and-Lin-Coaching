import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import "@fontsource/bree-serif" // Defaults to weight 400 with all styles included.
import "@fontsource/open-sans" // Defaults to weight 400 with all styles included.

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #f6f6f6;
  align-items: center;
  justify-content: space-between;

  .invisible {
    visibility: hidden;
    margin-right: 15px;
  }

  .visible {
    margin-left: 15px;
  }
`
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const MobileHeader = ({ siteTitle, setMenuVisible, menuVisible }) => {
  return (
    <HeaderContainer>
      <StaticImage
        className="visible"
        src="../images/hamburger-menu.svg"
        alt="Lin and Lin Education Logo"
        width={50}
        height={50}
        onClick={() => {
          setMenuVisible(!menuVisible)
        }}
      ></StaticImage>
      <LogoContainer>
        <StaticImage
          src="../images/lin-logo.svg"
          alt="Lin and Lin Education Logo"
          width={110}
          height={110}
        />
      </LogoContainer>
      <StaticImage
        src="../images/hamburger-menu.svg"
        alt="Lin and Lin Education Logo"
        width={50}
        height={50}
        className="invisible"
      ></StaticImage>
    </HeaderContainer>
  )
}

export default MobileHeader
