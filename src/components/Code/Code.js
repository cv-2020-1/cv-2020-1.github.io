import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import loadable from "@loadable/component"

export default (props) => {
    return (
        <pre className="bg-light">
            {props.code}
        </pre>
    )
}