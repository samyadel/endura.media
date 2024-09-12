import React, { useState } from "react";
import "./MainSection.styles.css";
import exampleVideo from "../../assets/sampleVids/video_example.mp4";
import vidComponent from "../../assets/vidComponent.png";
import vidComponent2 from "../../assets/vidComponent2.png";
import vidComponent3 from "../../assets/vidComponent3.png";
import arrow from "../../assets/arrow.png";
import nutriplusLogo from "../../assets/nutripluswellbeingLogo.jpg";
import { FaPlay } from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import { slides } from "./data.js";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Thumbnails, Video } from "yet-another-react-lightbox/plugins";

function MainSection() {
	const [open, setOpen] = useState(false);

	return (
		<main>
			<div>
				<div
					className="videoWrapper"
					dangerouslySetInnerHTML={{
						__html: `
							<video
								src=${exampleVideo}
								muted
								autoPlay
								loop
								playsInline
								class="exampleVideo"
							/>,
						`,
					}}
				></div>

				{/* <img src={template} className="template" /> */}
				<img src={vidComponent} className="vidComponent" />
				<img src={vidComponent2} className="vidComponent2" />
				<img src={vidComponent3} className="vidComponent3" />
				<img src={arrow} className="arrow" />
			</div>

			<div>
				<div className="contentWrapper">
					<p className="subtitle">[ Best Solutions ]</p>
					<h1 className="heading">
						<span className="highlight">Boost</span> your{" "}
						<span className="highlight">supplement</span> sales with engaging
						videos
					</h1>

					<p className="subheading">
						We create tailored video content that makes young consumers stop
						scrolling and start shopping
					</p>

					<div>
						<a
							href="https://calendly.com/samy-adel/consultation"
							target="_blank"
						>
							<button className="coa2">Book your free consultation</button>
						</a>

						<button className="secondaryBtn" onClick={() => setOpen(true)}>
							<div className="playVidIconWrapper">
								<FaPlay />
							</div>
							view samples of our work
						</button>

						<Lightbox
							open={open}
							slides={slides}
							close={() => setOpen(false)}
							plugins={[Video]}
						/>
					</div>
				</div>

				<hr className="divider" />

				<div className="testimonialWrapper">
					<div>
						<p>
							"Samy has delivered the highest quality video for my supplement
							brand"
						</p>
						<p>- Nutriplus Wellbeing</p>
					</div>

					<hr />

					<img src={nutriplusLogo} className="testimonialLogo" />
				</div>
			</div>
		</main>
	);
}

export default MainSection;
