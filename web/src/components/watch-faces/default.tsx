import React, { useEffect } from "react";
import { useTime } from "../../hooks/useTime";
import { getDate } from "../../utils/date";
import "./style.css";

// add event listener if you hover over the health food or water
// display the current value of the health food or water within the bar

// get classname of the bar that is being hovered over
addEventListener("mouseover", function (event) {
    // highlight the mouseover target
    console.log(event.target.className);
    var eventClass = event.target.className;
    if (eventClass === "healthBarFill") {
        console.log("healthBarFill");
        displayBarValue(eventClass);
    } else if (eventClass === "foodBarFill") {
        console.log("foodBarFill");
        displayBarValue(eventClass);
    } else if (eventClass === "waterBarFill") {
        console.log("waterBarFill");
        displayBarValue(eventClass);
    }
});

function displayBarValue(eventClass) {
    // get the value of the bar
    // console.log(eventClass);
    var barValue = document.querySelector("." + eventClass);
    console.log(barValue);
    // console.log(barValue.innerHTML);
    barValue.innerHTML = "100";
    setTimeout(() => {
        barValue.innerHTML = "";
    }, 2000);
}

// var HealthBarValue = document.querySelector(".healthBarFill");

// console.log(HealthBarValue);
// setTimeout(() => {
//     HealthBarValue.innerHTML = "";
// }, 2000);

// First, we need to import the necessary TypeScript modules

function DefaultWatchFace() {
    const { hour, minute, second } = useTime();
    return (
        <>
            {/* <div className="defaultWatchFace"></div> */}
            <div className="clock">
                <div className="clockHour">{hour}</div>
                <div className="clockMinute">{minute}</div>
                <div className="clockSecond">{second}</div>
            </div>
            <div className="clockDisplayInfo">
                Health
                <div className="healthBar">
                    <div className="healthBarFill" value="100"></div>
                </div>
                Food
                <div className="foodBar">
                    <div className="foodBarFill"></div>
                </div>
                Water
                <div className="waterBar">
                    <div className="waterBarFill"></div>
                </div>
            </div>
        </>
    );
}

export default DefaultWatchFace;
