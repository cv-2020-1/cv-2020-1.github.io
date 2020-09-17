/** @jsx jsx */
// import ProjectCard from "@lekoarts/gatsby-theme-cara/src/components/project-card"
import React from "react"
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import "../../../styles/card.css"

export default function Cover(props) {
  return (
    <Link
      to={props.link}
      style={{
        background: props.bg || `none`,
      }}
      className="postCard"
    >
      <div
        style={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}
      >
        {props.children}
      </div>
      <div
        style={{
          textTransform: `uppercase`,
          letterSpacing: `wide`,
          pt: 4,
          fontSize: [4, 5],
          fontWeight: `medium`,
          lineHeight: 1,
        }}
      >
        {props.title}
      </div>
    </Link>
  )
}
