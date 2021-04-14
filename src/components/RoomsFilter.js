import React, { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "../components/Title";

//get All unique values
const getUnique = (items, value) => {
	return [...new Set(items.map((item) => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
	const context = useContext(RoomContext);
	console.log(context);
	const {
		handleChange,
		type,
		capacity,
		price,
		minprice,
		maxPrice,
		minSize,
		maxSize,
		breakfast,
		pets,
	} = context;
	//get unique types
	let types = getUnique(rooms, "type");
	//add all
	types = ["all", ...types];
	//map to JSX
	types = types.map((item, index) => {
		return (
			<option value={item} key={index}>
				{item}
			</option>
		);
	});

	let people = getUnique(rooms, "capacity");
	people = people.map((item, index) => {
		return (
			<option value={item} key={index}>
				{item}
			</option>
		);
	});

	return (
		<section className="filter-container">
			<Title title="search rooms" />
			<form className="filter-form">
				{/* select type */}
				<div className="form-group">
					<label htmlFor="type">room type</label>
					<select
						name="type"
						id="type"
						value={type}
						className="form-control"
						onChange={handleChange}
					>
						{types}
					</select>
				</div>
				{/*end select type */}
				{/* select guest */}
				<div className="form-group">
					<label htmlFor="capacity">Guest</label>
					<select
						name="capacity"
						id="capacity"
						value={capacity}
						className="form-control"
						onChange={handleChange}
					>
						{people}
					</select>
				</div>
				{/*end select guest */}
				{/* room price */}
				<div className="form-group">
					<label htmlFor="price">Room Price</label>
					<input
						type="range"
						name="price"
						id="price"
						min={minprice}
						max={maxPrice}
						value={price}
						className="form-control"
						onChange={handleChange}
					/>
				</div>
				{/* end room price */}
				{/* room Size */}
				<div className="form-group">
					<label htmlFor="size">Room Size</label>
					<div className="size-inputs">
						<input
							type="number"
							name="minSize"
							id="size"
							value={minSize}
							onChange={handleChange}
							className="size-input"
						/>
						<input
							type="number"
							name="maxSize"
							id="size"
							value={maxSize}
							onChange={handleChange}
							className="size-input"
						/>
					</div>
				</div>
				{/* end room size */}
				{/* extras */}
				<div className="form-group">
					<div className="single-extra">
						<input
							type="checkbox"
							name="breakfast"
							id="breakfast"
							checked={breakfast}
							onChange={handleChange}
						/>
						<label htmlFor="breakfast">Breakfast</label>
					</div>
					<div className="single-extra">
						<input
							type="checkbox"
							name="pets"
							id="pets"
							checked={pets}
							onChange={handleChange}
						/>
						<label htmlFor="pets">pets</label>
					</div>
				</div>
				{/* end extras */}
			</form>
		</section>
	);
};

export default RoomsFilter;
