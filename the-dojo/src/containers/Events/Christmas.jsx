import React, { PureComponent } from "react";
import ContentSection from "../../HOC/ContentSectionHOC";

const FoodSheet = () => (
    <div className="content-section-body">

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfpbzipQm6Nlq03G6ApbJf-gzAT_sRD4jEfpthzsMh7Um3nuA/viewform?embedded=true" width="640" height="991" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
        <iframe  style={{width: "100%", minHeight: "300px"}}
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRmTMOYyE5T68HF-K91uQAexwEKuyROv8ljrkvtfNDQlFap17F8q0iJa1XXQwe_Rv_7XkJCWzBtTWkg/pubhtml?gid=1197879791&amp;single=false&amp;widget=false&amp;headers=false"></iframe>
    </div>
)

export default class Christmas extends PureComponent {
    async componentDidMount() {
        window.scrollTo(0,0);
        document.title = "Christmas - West LA Kendo Dojo";
    }

    render() {

        return (
            <div className="content-container home-container">
                {
                    ContentSection(FoodSheet)
                }
            </div>
        )
    }
}