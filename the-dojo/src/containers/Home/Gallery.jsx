import React, { Component } from "react";
import BackgroundedSection from "../../components/BackgroundedSection";
import Back from "../../components/Back";
import Next from "../../components/Next";
import GalleryBullet from "./GalleryBullet";

import "./Gallery.css";

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentList: [
               { 
                    title: 'Welcome to West LA Kendo Dojo',
                    bgSrc: 'http://wlakendo.org/assets/home_hero_1.jpg',
                    desc: 'West LA Kendo Dojo is a Kendo dojo located in West Los Angeles, near the Sawtelle Japantown area.',
                    linkText: 'Learn More',
                    to: '/about'
                 },
               {
                    title: 'Membership',
                    bgSrc: 'http://wlakendo.org/assets/home_hero_2.jpg',
                    desc: 'To join, please visit our dojo during practice time. No appointment is necessary.',
                    linkText: 'Learn More',
                    to:'/membership'
                },
               {
                    title: 'Schedule',
                    bgSrc: 'http://wlakendo.org/assets/home_hero_3.jpg',
                    desc: 'Upcoming events and other important dates related to West LA Kendo Dojo',
                    linkText: 'Learn More',
                    to:'/schedule'
                }
            ],
            index: 0
        }

        this.selectSection = this.selectSection.bind(this);
    }

    setIdx(idx) {
        if(idx < 0) idx = 0;
        if(idx == this.state.contentList.length ) idx = this.state.contentList.length - 1;

        this.setState({
            index: idx
        })
    }

    selectSection(idx) {
        this.setState({index: idx});
    }

    render() {
        const idx = this.state.index;

        return (
            <div className="gallery">
                <div className="section-list-container">
                    <BackgroundedSection {...this.state.contentList[idx]} />
                </div>
                <button className="prev-btn" onClick={() => this.setIdx(this.state.index - 1)}>
                    <Back />
                </button>
                <button className="next-btn" onClick={() => this.setIdx(this.state.index + 1)}>
                    <Next />
                </button>

                <div className="gallery-bullet-container">
                    { this.state.contentList.map(
                        (itm, idx) => <GalleryBullet key={idx} index={idx} selected={this.state.index === idx} onClick={this.selectSection}/>)
                    }
                </div>
            </div>
        )
    }
}