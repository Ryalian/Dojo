import React, { Component } from "react";

import HowToJoin from "./HowToJoin";
import Waiver from "./Waiver";
import NewMemberFee from "./NewMemberFee";
import CurrentMember from "./CurrentMember";

import ContentSection from "../../HOC/ContentSectionHOC";
import BackgroundedSection from "../../components/BackgroundedSection";


import "./Membership.css";

export default class Membership extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
        document.title = "Membership - West LA Kendo Dojo";
    }

    render() {
        return (
            <div className="membership-container">
                <BackgroundedSection
                    title="Membership"
                    bgSrc="http://wlakendo.org/assets/membership_hero.jpg"
                />
                { ContentSection(HowToJoin) }
                { ContentSection(Waiver) }
                { ContentSection(NewMemberFee) }
                { ContentSection(CurrentMember) }
            </div>
        )
    }
}