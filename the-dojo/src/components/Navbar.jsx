import React, { PureComponent } from 'react';
import { Link, withRouter } from "react-router-dom";

import "./Navbar.css"

class Navbar extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            pageLists: [
                { path: '/', name: 'Home' },
                { path: '/about', name: 'About' },
                { path: '/membership', name: 'Membership' },
                { path: '/schedule', name: 'Schedule' },
                // { path: '/news', name: 'News' },
                { path: '/contact', name: 'Contact' },
            ],
            currentPath: window.location.pathname
        }
    }

    onChangePath(targetPath) {
        this.setState({
            currentPath: targetPath
        })
    }

    componentDidUpdate() {
        this.setState({currentPath: window.location.pathname});
    }

    renderLinks() {
        return this.state.pageLists.map((page, idx) => {
            return (
                <li key={idx} className={this.state.currentPath === page.path? "current-page": ""}>
                    <Link to={page.path} onClick={ () => {this.onChangePath(page.path)} }>{page.name}</Link>
                </li>
            )
        })
    }

    render() {
        return (
            <div className="nav-container">
                <div className="nav-content">
                    <div className="nav-title">
                        <Link to="/" onClick={ () => {this.onChangePath("/")} }>West LA Kendo Dojo</Link>
                    </div>
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

export default withRouter(Navbar);