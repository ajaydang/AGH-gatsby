import React, { useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import MainLogo from "../images/client-logo/main-logo.png"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            path
            subMenu {
              name
              path
            }
          }
        }
      }
    }
  `)

  const { menuLinks } = data.site.siteMetadata
  const [openSubMenu, setOpenSubMenu] = useState(null)

  const handleClick = link => {
    if (openSubMenu === link) {
      setOpenSubMenu(null)
    } else {
      setOpenSubMenu(link)
    }
  }

  return (
    <header>
      <Link to="/">
        <img src={MainLogo} alt="Main Logo" />
      </Link>

      <nav>
        <ul>
          {menuLinks.map(link => (
            <li key={link.path}>
              <button
                onClick={() => handleClick(link.name)}
                className="menu-button"
              >
                <Link to={link.path}>{link.name}</Link>
              </button>
              {link.subMenu &&
                link.subMenu.length > 0 &&
                openSubMenu === link.name && (
                  <div className="popup">
                    <ul>
                      {link.subMenu.map(subLink => (
                        <li key={subLink.path}>
                          <Link to={subLink.path}>{subLink.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
