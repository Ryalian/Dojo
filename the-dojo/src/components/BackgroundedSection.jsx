import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./BackgroundedSection.css";

export default class BackgroundedSection extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
    }

    renderSection() {
        return (
            <img src={this.props.bgSrc} />
        )
    }
    
    render() {
        return (
            <div className="backgrounded-section">
                { this.renderSection() }
                <div className="backgrounded-section-content-container">
                    <div className="backgrounded-section-content">
                        <h1>{ this.props.title }</h1>
                        { this.props.desc && <p>{ this.props.desc }</p>}
                        { this.props.linkText && <button><Link to={this.props.to}>{ this.props.linkText }</Link></button> }
                    </div>
                </div>
            </div>
        )
    }
}