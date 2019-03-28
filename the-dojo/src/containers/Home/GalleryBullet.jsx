import React from "react";

export default class GalleryBullet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            styles: {
                display: "inline-block",
                margin: "0 5px",
                width: "32px",
                height: "3px",
                backgroundColor: "white",
                cursor: "pointer"
            }
        }
    }

    render() {
        return (
            <div 
                style={{...this.state.styles, opacity: this.props.selected? "1": "0.5"}}
                onClick={() => this.props.onClick(this.props.index)}>
            </div>
        )
    }
}