import React from "react";
import VideoPlayer from "../algorithms/video/VideoPlayer";

export default () => {
	return (
		<div className="ml-5 mr-5 my-3">
			<div>
				<h1>Test video</h1>
				<VideoPlayer />
				<form action="">
					<input type="checkbox" value="checked"/>
				</form>
			</div>
		</div>
	);
};
