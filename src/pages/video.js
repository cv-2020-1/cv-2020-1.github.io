import React, { useState } from "react";
import VideoPlayer from "../algorithms/video/VideoPlayer";

export default () => {

	const [state, setValue] = useState(0); // integer state	

	const submitForm = (e) => {
		e.preventDefault();
	}

	const radioChange = (param, e) => {
		switch(param){
			case 'r1': setValue(0); /*state = 0;*/ break;
			case 'r2': setValue(1); /*state = 1;*/ break;
			case 'r3': setValue(2); /*state = 2;*/ break;
			case 'r4': setValue(3); /*state = 3;*/ break;
		}		
	}

	return (
		<div className="ml-5 mr-5 my-3">
			<div>
				<h1>Test video</h1>
				<VideoPlayer state={state}/>
				<form onSubmit={submitForm}>
					<input type="radio" className="mx-3" id="r1" name="group1" value="r1" onChange={radioChange.bind(this,'r1')}/>
					<label htmlFor="r1">FILTRO GRIS</label>
					<input type="radio" className="mx-3" id="r2" name="group1" value="r2" onChange={radioChange.bind(this,'r2')}/>
					<label htmlFor="r2">CONVOLUCION DETECTOR BORDES</label>
					<input type="radio" className="mx-3" id="r3" name="group1" value="r3" onChange={radioChange.bind(this,'r3')}/>
					<label htmlFor="r3">ESCALA GRISES</label>
					<input type="radio" className="mx-3" id="r4" name="group1" value="r4" onChange={radioChange.bind(this,'r4')}/>
					<label htmlFor="r4">VIDEO ORIGINAL</label>					
				</form>
				<br></br>
				<p style={{fontSize:'30px'}}>FRAMERATE: <span id="framerate"></span></p>
			</div>
		</div>
	);
};
