import React, { Component } from "react";
import "./ContentSectionHOC.css";


export default (Content, clsName="", customStyles={}, props) => (
    <div className={`content-section ${clsName}`} style={customStyles}>
        <Content {...props}/>
    </div>
)