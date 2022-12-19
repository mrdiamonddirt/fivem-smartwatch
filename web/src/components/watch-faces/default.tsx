import React, { useEffect } from "react";
import { useTime } from "../../hooks/useTime";
import { getDate } from "../../utils/date";
import "./style.css";

// add event listener for mouse click down and move mouse to the left
// to change the watch face

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
                    <div className="healthBarFill"></div>
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
