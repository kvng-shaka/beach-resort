import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

const Error = () => {
	return (
		<div>
			<Hero>
				<Banner title="404" subtitle="page not found">
					<Link to="/" className="btn-primary">
						Back to Home
					</Link>
				</Banner>
			</Hero>
		</div>
	);
};

export default Error;
