import React from "react";
import BackgroundedSection from "../../components/BackgroundedSection";

export default () => (
    <div className="content-section-container-lg">
        <BackgroundedSection
            title="Membership"
            bgSrc="http://wlakendo.org/assets/home_membership.jpg"
            desc="To join, please visit our dojo during practice time. No appointment is necessary."
            linkText="Learn More"
            to="/membership"
        />
    </div>
)