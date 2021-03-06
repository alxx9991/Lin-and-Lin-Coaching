import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import "@fontsource/bree-serif" // Defaults to weight 400 with all styles included.
import "@fontsource/open-sans" // Defaults to weight 400 with all styles included.

const NavBar = styled.div`
  display: flex;
  flex-direction: column;

  .above-navbar {
    flex: 1 1 0;
  }
  ul {
    flex: 1 1 0;
    box-sizing: border-box;
    margin: 0;
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    padding-left: 20px;
    padding-right: 20px;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      margin-left: 5px;
      margin-bottom: -4px;

      a {
        font-family: "Roboto";
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        text-decoration: none;
        color: #555555;
      }
    }

    li.navbar-item:hover {
      a {
        color: #215a9a;
      }
    }

    li.navbar-item-active {
      background-color: #ffffff;

      a {
        color: #215a9a;
      }
    }
  }
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f6f6f6;
  width: 100%;
  @media only screen and (max-width: 600px) {
    display: none;
  }

  .header-inner {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1130px;
  }
`
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding-left: 20px;
  h2 {
    display: inline;
    padding-left: 40px;
    font-family: "Sans Serif";
    color: #555555;
    font-size: 36px;
    font-weight: normal;
  }
`

const Header = ({ siteTitle, active }) => (
  <HeaderContainer>
    <div className="header-inner">
      <LogoContainer>
        <StaticImage
          src="../images/lin-logo.svg"
          alt="Lin and Lin Education Logo"
          width={110}
          height={110}
        />
      </LogoContainer>
      <NavBar>
        <div className="above-navbar"></div>
        <ul>
          <li
            className={
              active === "index" ? "navbar-item-active" : "navbar-item"
            }
          >
            <Link to="/">&nbsp;&nbsp;Home&nbsp;&nbsp;</Link>
          </li>
          <li
            className={
              active === "sample-videos" ? "navbar-item-active" : "navbar-item"
            }
          >
            <Link to="/sample-videos">
              &nbsp;&nbsp;Sample Videos&nbsp;&nbsp;
            </Link>
          </li>
          {/* <li
            className={
              active === "about" ? "navbar-item-active" : "navbar-item"
            }
          >
            <Link to="/about">&nbsp;&nbsp;About Me&nbsp;&nbsp;</Link>
          </li> */}
          <li
            className={
              active === "contact" ? "navbar-item-active" : "navbar-item"
            }
          >
            <Link to="/contact">&nbsp;&nbsp;Contact&nbsp;&nbsp;</Link>
          </li>
        </ul>
      </NavBar>
    </div>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
