import React, { Fragment } from "react";
import PracticeLocation from "./PracticeLocation";

const practiceList = [
    { day: "Tuesdays", reg: "7:30pm-9:00pm", adv: "9:00pm-10:00pm"},
    { day: "Thursdays (1st/3rd/5th only)", reg: "7:30pm-9:00pm", adv: "9:00pm-10:00pm"},
    { day: "Saturdays", reg: "6:00pm-8:00pm", adv: "8:00pm-9:00pm"}
]

export default () => (
    <Fragment>
        <h3>Practice Details</h3>
        <div className="practice-time">
            {
                practiceList.map((prac, idx) => (
                    <div className="practice" key={idx}>
                        <h5>{ prac.day }</h5>
                        <p>{ `Regular Practice: ${prac.reg}` }</p>
                        <p>{ `Advanced Practice: ${prac.adv}` }</p>
                    </div>
                ))
            }
        </div>
        <div className="practice-location">
            <PracticeLocation />
        </div>
    </Fragment>
)