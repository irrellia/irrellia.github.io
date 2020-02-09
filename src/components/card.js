import React from "react"
import Styles from "../styles/card.module.css"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Date from "../assets/date.svg"

function Card(props) {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "assets/placeholder.png" }) {
        childImageSharp {
          id
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={Styles.container}>
      <Img
        className={Styles.image}
        alt="Post Thumbnail"
        fluid={props.cover || data.file.childImageSharp.fluid}
      />
      <div className={Styles.wrapper}>
        <span className={Styles.title}>{props.title}</span>
        <span className={Styles.date}>
          <Date className={Styles.prefix} /> {props.date}
        </span>
        <span className={Styles.desc}>{props.desc}</span>
      </div>
    </div>
  )
}

export default Card