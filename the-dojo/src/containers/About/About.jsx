import React, { Component } from "react";
import History from "./History";
import SenseiList from "./SenseiList";

import ContentSection from "../../HOC/ContentSectionHOC";
import BackgroundedSection from "../../components/BackgroundedSection";

import "./About.css";

export default class About extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
        document.title = "About - West LA Kendo Dojo";
    }

    render() {
        return (
            <div>
                <BackgroundedSection
                    title="About West LA Kendo Dojo"
                    bgSrc="http://wlakendo.org/assets/about_hero.jpg"
                />
                { ContentSection(History) }
                { ContentSection(SenseiList, "blue-background") }
            </div>
        )
    }
}