import * as React from "react"
import styled from "styled-components"
import "@fontsource/roboto"
import "@fontsource/open-sans"
import { Link } from "gatsby"

const StyledMobileMenu = styled.div`
  height: 100%;
  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      width: 100%;
      display: inline-block;
      height: 10%;
      a {
        padding-top: 10px;
        padding-left: 15px;
        display: inline-block;
        font-family: "Roboto";
        color: #215a9a;
        height: 100%;
        width: 100%;
        text-decoration: none;
      }
    }
  }
`

const MobileMenu = () => {
  return (
    <StyledMobileMenu>
      <ul>
        <li className="navbar-item">
          <Link to="/">&nbsp;&nbsp;Home&nbsp;&nbsp;</Link>
        </li>
        <li className="navbar-item">
          <Link to="/sample-videos">&nbsp;&nbsp;Sample Videos&nbsp;&nbsp;</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">&nbsp;&nbsp;About Me&nbsp;&nbsp;</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact">&nbsp;&nbsp;Contact&nbsp;&nbsp;</Link>
        </li>
      </ul>
    </StyledMobileMenu>
  )
}
export default MobileMenu
