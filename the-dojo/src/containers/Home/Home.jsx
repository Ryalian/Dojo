import React, { PureComponent } from "react";

import Gallery from "./Gallery";
import ContentSection from "../../HOC/ContentSectionHOC";
import HomeSchedule from "./HomeSchedule";
import HomeMember from "./HomeMember";

import "./Home.css";

export default class Home extends PureComponent {
    componentDidMount() {
        window.scrollTo(0,0);
        document.title = "Home - West LA Kendo Dojo";
    }

    render() {
        return (
            <div className="content-container home-container">
                { ContentSection(Gallery) }
                { ContentSection(HomeSchedule, 'blue-background')}
                { ContentSection(HomeMember, null, { 'margin': '50px'})}
            </div>
        )
    }
}