//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

//render your react application
let count = 0
let countUp
let countDown

function cuentaRegresiva (){
    clearInterval(countUp);
        countDown=setInterval(function (){
            if (count==0){clearInterval(countDown)}
            ReactDOM.render(<SecondsCounter cuenta="Cuenta progresiva" count={count} backwards={cuentaProgresiva}/>, document.querySelector("#app"));
            count--
            if(count==-1){count++}
        }, 1000)
    }


function cuentaProgresiva () {
    clearInterval(countDown);
    countUp = setInterval(function (){
	ReactDOM.render(<SecondsCounter cuenta="Cuenta regresiva" count={count} backwards={cuentaRegresiva}/>, document.querySelector("#app"));
	count++
}, 1000)}

window.onload = cuentaProgresiva()
