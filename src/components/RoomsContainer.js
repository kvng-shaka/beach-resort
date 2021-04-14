import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { withRoomConsumer } from "../Context";

const RoomsContainer = ({ context }) => {
	console.log(context);
	const { loading, sortedRooms, rooms } = context;
	if (loading) {
		return "...loading";
	}
	return (
		<>
			<RoomsFilter rooms={rooms} />
			<RoomsList rooms={sortedRooms} />
		</>
	);
};

export default withRoomConsumer(RoomsContainer);

// import React from "react";
// import RoomsFilter from "./RoomsFilter";
// import RoomsList from "./RoomsList";
// import {RoomConsumer} from '../context'

// const RoomsContainer = () => {
// 	return (
//         <>
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const {loading, sortedRooms, rooms} = value
//                     if(loading){
//                         return "...loading"
//                     }
//                     return (
// 						<div>
// 							hello from rooms container
// 							<RoomsFilter rooms={rooms} />
// 							<RoomsList rooms={sortedRooms} />
// 						</div>
// 					);
//                 }
//             }
//         </RoomConsumer>

//         </>
// 	);
// };

// export default RoomsContainer;
