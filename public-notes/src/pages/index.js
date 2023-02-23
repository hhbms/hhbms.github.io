import * as React from "react"
import { Link } from "gatsby"

import * as styles from "../styles/notes.module.scss"
import IndexContent from "../content/index.mdx"

const IndexPage = () => (
  <div className={styles.mainContainer}>
    <div>
      <IndexContent />
    </div>
  </div>
)

export default IndexPage
