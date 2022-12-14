import * as React from "react"
import { Link } from "gatsby"

import * as styles from "../styles/notes.module.scss"

const IndexPage = () => (
  <div className={styles.mainContainer}>
    <div>
      <h1>MIT Huang-Hobbs BioMakerspace</h1>

      <h2>Training modules</h2>
      <ul>
        <li>
          <Link to="/microbiology">Microbiology and aseptic technique</Link>
        </li>
      </ul>

      <h2>Protocols</h2>
      <ul>
        <li>
          <Link to="/protocols#preparing-glycerol-stocks-of-bacteria">
            Preparing glycerol stocks of bacteria
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default IndexPage
