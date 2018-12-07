import React from "react";
import "./ContentSectionHOC.css";


export default (Content) => (
    <div className="content-section">
        <Content />
    </div>
)