import React, { Component } from 'react'
import "./Intro.css"

export default class Intro extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="intro-container">
                <div className="intro-title">West LA Kendo Dojo</div>
            </div>
        )
    }
}