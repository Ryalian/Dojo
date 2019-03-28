import React, { Component } from "react";

import BackgroundedSection from "../../components/BackgroundedSection";

import "./Schedule.css";

export default class Schedule extends Component {
    componentDidMount() {
        setTimeout(() => {
            window.scrollTo(0,0);
        }, 50); // due to iframe loading problem
        document.title = "Schedule - West LA Kendo Dojo";
    }
    
    render() {
        return (
            <div className="schedule-container">
                <BackgroundedSection
                    title="Schedule"
                    bgSrc="http://wlakendo.org/assets/schedule_hero.jpg"
                />
                <div className="content-section">
                    <div className="content-section-body">
                        <p>Check upcoming events and other important dates related to West LA Kendo Dojo. For more event info,{" "}
                            <a href="https://www.socalkendo.org/event-schedule/scko-event-schedule-archive/">view SCKO calendar.</a>
                        </p>
                        <iframe src={"https://calendar.google.com/calendar/embed?src=6pf0dr6gn43vbq1cbkpin8oeq0%40group.calendar.google.com&ctz=America%2FLos_Angeles"} style={{border: "0", padding: "50px 0"}} width="800" height="600" scrolling="no"/>
                    </div>
                </div>
            </div>
        )
    }
}