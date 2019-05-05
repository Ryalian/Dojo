import React, { Component } from "react";

import BackgroundedSection from "../../components/BackgroundedSection";

import "./Contact.css";

export default class Membership extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
        document.title = "Contact - West LA Kendo Dojo";
    }
    
    render() {
        return (
            <div className="contact-container">
                <BackgroundedSection
                    title="Contact"
                    bgSrc="http://wlakendo.org/assets/contact_hero.jpg"
                />
                <div className="content-section">
                    <div className="content-section-body">
                        <p>If you have any questions, please feel free to get in touch with us.</p>
                        <h2>New students application and visitors</h2>
                        <p className="contact-info"><strong>E-mail (preferred): </strong><a href="mailto:vhernandez@vhernandez.net">vhernandez@vhernandez.net</a></p>
                        <p className="contact-info"><strong>Phone: </strong>(213) 595-8185 Vincent Hernandez</p>
                        <p>We always welcome temporary Kenshi visitors from all around the world.</p>

                        <h2>Other Inquiry</h2>
                        <p className="contact-info"><strong>E-mail (preferred): </strong><a href="mailto:akirabanchi@yahoo.com">akirabanchi@yahoo.com</a></p>
                        <p className="contact-info"><strong>Phone: </strong>(310) 621-3248 (cell)  Akira Banchi (Head Instructor)</p>
                        <p>日本語メールでもOKです。</p>
                    </div>
                </div>
            </div>
        )
    }
}