import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import "@fontsource/bree-serif" // Defaults to weight 400 with all styles included.
import "@fontsource/open-sans" // Defaults to weight 400 with all styles included.

const MobileHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #f6f6f6;
  align-items: stretch;
  justify-content: space-between;

  @media only screen and (min-width: 600px) {
    display: none;
  }

  .hamburger {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 20px;
    padding-right: 20px;

    .invisible {
      visibility: hidden;
    }
  }

  .hamburger-active {
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 20px;
    padding-right: 20px;

    .invisible {
      visibility: hidden;
    }
  }
`
const MobileLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const HamburgerMenuContainer = styled.div``
const MobileHeader = ({ siteTitle, setMenuVisible, menuVisible }) => {
  return (
    <MobileHeaderContainer>
      <div
        className={menuVisible ? "hamburger-active" : "hamburger"}
        onClick={() => {
          setMenuVisible(!menuVisible)
        }}
      >
        <StaticImage
          className="visible"
          src="../images/hamburger-menu.svg"
          alt="Hamburger menu icon"
          width={50}
          height={50}
        ></StaticImage>
      </div>
      <MobileLogoContainer>
        <StaticImage
          src="../images/lin-logo.svg"
          alt="Lin and Lin Education Logo"
          width={80}
          height={80}
        />
      </MobileLogoContainer>
      <div className="hamburger">
        <StaticImage
          src="../images/hamburger-menu.svg"
          alt="invisible hamburger icon"
          width={50}
          height={50}
          className="invisible"
        ></StaticImage>
      </div>
    </MobileHeaderContainer>
  )
}

export default MobileHeader
