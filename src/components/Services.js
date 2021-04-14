import React, { useState } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const Services = () => {
	const [services, setServices] = useState([
		{
			icon: <FaCocktail />,
			title: "Free Cocktails",
			info:
				"lorem ipsum dolor sit amet consectatue elit. Magni, corporis!",
		},
		{
			icon: <FaHiking />,
			title: "Endless Hikinh",
			info:
				"lorem ipsum dolor sit amet consectatue elit. Magni, corporis!",
		},
		{
			icon: <FaShuttleVan />,
			title: "Free Shuttle",
			info:
				"lorem ipsum dolor sit amet consectatue elit. Magni, corporis!",
		},
		{
			icon: <FaBeer />,
			title: "Strongest Beer",
			info:
				"lorem ipsum dolor sit amet consectatue elit. Magni, corporis!",
		},
	]);
	return (
		<section className="services">
			<Title title="services" />
			<div className="services-center">
				{services.map((item, index) => {
					return (
						<article key={index} className="services">
							<h2>
								<span>{item.icon}</span>
							</h2>
							<h6>{item.title}</h6>
							<p>{item.info}</p>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Services;
