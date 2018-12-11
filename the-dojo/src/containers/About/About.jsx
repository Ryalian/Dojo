import React, { Component } from "react";
import History from "./History";
import SenseiList from "./SenseiList";
import ContentSection from "../../HOC/ContentSectionHOC";
import "./About.css";

let aboutPic = () => (
    <div className="picture">
        <img src="http://www.wlakendo.org/images/about.jpg" />
    </div>
)

export default class About extends Component {
    render() {
        return (
            <div>
                { ContentSection(aboutPic) }
                { ContentSection(History) }
                { ContentSection(SenseiList) }
            </div>
        )
    }
}