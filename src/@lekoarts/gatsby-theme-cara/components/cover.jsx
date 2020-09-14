/** @jsx jsx */
import React from "react"
// import ProjectCard from "@lekoarts/gatsby-theme-cara/src/components/project-card"
import { Link } from "gatsby"
import { jsx } from "theme-ui"

export default function Cover(props) {
  return (
    <Link
      to={props.link}
      style={{
        width: `100%`,
        boxShadow: `lg`,
        position: `relative`,
        textDecoration: `none`,
        borderRadius: `lg`,
        px: 4,
        py: [4, 5],
        color: `white`,
        background: props.bg || `none`,
        transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
        "&:hover": {
          color: `white !important`,
          transform: `translateY(-5px)`,
          boxShadow: `xl`,
        },
      }}
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
