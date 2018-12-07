import React, { PureComponent} from 'react';
import { Link } from "react-router-dom";

import "./Navbar.css"

export default class Navbar extends PureComponent {
    constructor(props) {
        super(props);


        this.state = {
            pageLists: [
                { path: '/', name: 'Home' },
                { path: '/about', name: 'About' },
                { path: '/join', name: 'Join Payment' },
                { path: '/faq', name: 'FAQ' },
                { path: '/links', name: 'Links' },
                { path: '/contact', name: 'Contact' },
            ]
        }
    }

    renderLinks() {
        return this.state.pageLists.map((page, idx) => {
            return (
                <li key={idx}>
                    <Link to={page.path}>{page.name}</Link>
                </li>
            )
        })
    }

    render() {
        return (
            <div className="nav-container">
                <div className="nav-content">
                    <div className="nav-title">West LA Kendo Dojo</div>
                    <nav>
                        <ul>
                            { this.renderLinks() }
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}