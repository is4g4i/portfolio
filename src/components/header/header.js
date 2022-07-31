import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    container,
    navContainer,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle
} from './header.module.scss'

const Header = ({ pageTitle }) => {
    const pageMetaData = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
                }
            }
        }`)

    return (
        <div className={container}>
            {/* {pageMetaData.site.siteMetadata.title} */}
            <nav className={navContainer} >
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>
                            Home
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>
                            About
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/blog" className={navLinkText}>
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
        </div >
    )
}
export default Header