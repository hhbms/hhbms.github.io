import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import Chem from "../components/chem"
import Tag from "../components/tag"
import Box from "../components/box"
import { Link } from "gatsby"

import "../styles/katex.css"
import "../styles/main.scss"

import * as styles from "../styles/notes.module.scss"

require("katex/dist/katex.min.css")

const shortcodes = { C: Chem, T: Tag, Link, Box }

export default function PageTemplate({ data: { mdx }, children }) {
  console.log(mdx)

  return (
    <>
      <div className={styles.mainContainer}>
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </div>
    </>
  )
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      fields {
        slug
      }
    }
  }
`
