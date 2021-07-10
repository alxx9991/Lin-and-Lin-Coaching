import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import MobileHeader from "./mobile-header"
import "./layout.css"
import ContentsContainer from "./content"
import MobileMenu from "./mobile-menu"

const LayoutContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column; ;
`

const Layout = ({ children, active }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [menuVisible, setMenuVisible] = React.useState(false)

  if (!menuVisible) {
    return (
      <LayoutContainer>
        <Header
          siteTitle={data.site.siteMetadata?.title || `Title`}
          active={active}
        />
        <MobileHeader
          siteTitle={data.site.siteMetadata?.title || `Title`}
          setMenuVisible={setMenuVisible}
          menuVisible={menuVisible}
        />
        <ContentsContainer>
          <div className="content-inner">{children}</div>
        </ContentsContainer>
      </LayoutContainer>
    )
  } else {
    return (
      <LayoutContainer>
        <Header
          siteTitle={data.site.siteMetadata?.title || `Title`}
          active={active}
        />
        <MobileHeader
          siteTitle={data.site.siteMetadata?.title || `Title`}
          setMenuVisible={setMenuVisible}
          menuVisible={menuVisible}
        />
        <MobileMenu active={active}></MobileMenu>
      </LayoutContainer>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
