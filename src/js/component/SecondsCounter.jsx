import React from "react";
import ReactDOM from "react-dom";
//create your first component

const SecondsCounter = (props) => {
	let number = props.count 
	return <><i class="fa-regular fa-clock"></i> <p>{number?.toString().padStart(6, '0') || ""}</p></>
}

export default SecondsCounter;
