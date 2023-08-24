//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

//render your react application
let count = 0

setInterval(function (){
	ReactDOM.render(<SecondsCounter count={count}/>, document.querySelector("#app"));
	count++
}, 1000)