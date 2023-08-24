import React from "react";
import ReactDOM from "react-dom";
//create your first component

const SecondsCounter = (props) => {
	let number = props.count 
	return <><button onClick={props.backwards}>{props.cuenta}</button><div className="count-container"><i className="fa-regular fa-clock"></i> <p>{number?.toString().padStart(6, '0') || ""}</p></div></>
}

export default SecondsCounter;
