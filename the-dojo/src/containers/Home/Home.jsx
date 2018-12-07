import React, { PureComponent } from "react";

import Picture from "./Picture";
import WhatIsKendo from "./WhatIsKendo";
import PracticeDetail from "./PracticeDetail";
import ContentSection from "../../HOC/ContentSectionHOC";
import "./Home.css";

export default class Home extends PureComponent {
    render() {
        return (
            <div className="content-container">
                { ContentSection(Picture) }
                { ContentSection(WhatIsKendo) }
                { ContentSection(PracticeDetail) }
            </div>
        )
    }
}