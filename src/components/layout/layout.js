import * as React from 'react'
import Header from '../header/header'
import { useStaticQuery, graphql } from 'gatsby'
import {
    container,
    heading
} from './layout.module.scss'

const Layout = ({ pageTitle, children }) => {
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
            <title>{pageTitle} | {pageMetaData.site.siteMetadata.title}</title>
            <Header pageTitle={pageTitle} />
            <main>
                {children}
            </main>
        </div >
    )
}
export default Layout