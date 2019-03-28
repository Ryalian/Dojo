import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";

import "./Footer.css";

export default class Footer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            pageLists: [
                { path: '/about', name: 'About' },
                { path: '/membership', name: 'Membership' },
                { path: '/schedule', name: 'Schedule' },
                // { path: '/news', name: 'News' },
                { path: '/contact', name: 'Contact' },
            ]
        }
    }

    onChangePath(targetPath) {
        this.setState({
            currentPath: targetPath
        })
    }

    renderLinks() {
        return this.state.pageLists.map((page, idx) => {
            return (
                <li key={idx}>
                    <Link to={page.path} onClick={ () => {this.onChangePath(page.path)} }>{page.name}</Link>
                </li>
            )
        })
    }

    render() {
        return (
            <div className="footer-container">
                <div className="footer-content content-section-container">
                    <div className="footer-title">West LA Kendo Dojo</div>

                    <div className="footer-content-info">
                        <div className="footer-address">
                            {/* TODO: use html5 address */}
                            <h5>Japanese Culture Institute of Sawtelle</h5>
                            <h5>2110 Corinth Avenue</h5>
                            <h5>Los Angeles CA 90025</h5>
                        </div>

                        <div className="footer-nav">{ this.renderLinks() }</div>

                        <div className="footer-link">
                            <h6>West LA Dojo is a non-profit organization founded in 1952</h6>
                        </div>
                    </div>

                    <div className="footer-media-container">
                        <a rel="facebook" href="https://www.facebook.com/groups/36758325587/" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        )
    }

}