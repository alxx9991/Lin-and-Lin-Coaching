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
  flex-direction: column;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  let isSSR = false

  if (typeof window == "undefined") {
    isSSR = true
  }
  const [menuVisible, setMenuVisible] = React.useState(false)
  const [windowSize, setWindowSize] = React.useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  })

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      })
    }
  }, [])

  if (typeof window !== "undefined") {
    window.removeEventListener("resize", () => {
      if (typeof window !== "undefined") {
        window.addEventListener("resize", () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          })
        })
      }
    })
  }

  if (windowSize.width < 600) {
    if (!menuVisible) {
      return (
        <LayoutContainer>
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
          <MobileHeader
            siteTitle={data.site.siteMetadata?.title || `Title`}
            setMenuVisible={setMenuVisible}
            menuVisible={menuVisible}
          />
          <MobileMenu></MobileMenu>
        </LayoutContainer>
      )
    }
  }

  return (
    <LayoutContainer>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <ContentsContainer>
        <div className="content-inner">{children}</div>
      </ContentsContainer>
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
