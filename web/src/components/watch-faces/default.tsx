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
            {/* <div>DefaultWatchFace</div> */}
            <div className="clock">
                <div className="clockHour">{hour}</div>
                <div className="clockMinute">{minute}</div>
                <div className="clockSecond">{second}</div>
            </div>
        </>
    );
}

export default DefaultWatchFace;
