import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

export default (props) => {
	if (typeof window !== "undefined") {
		return (
            <div style={{height:"100vh"}}>
                <iframe src="https://slides.com/macorreag/brownian/embed" className="slides" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            </div>
		);
	} else return null;
};
