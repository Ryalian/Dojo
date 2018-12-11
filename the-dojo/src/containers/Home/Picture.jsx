import React, { Component }from 'react';

const picList = [
    "https://www.e-bogu.com/v/vspfiles/assets/images/E-BOGU-Kendo-Do.jpg",
    "https://www.e-bogu.com/v/vspfiles/assets/images/E-BOGU-CustomBogu.jpg",
    "https://www.e-bogu.com/v/vspfiles/assets/images/cat_shinai.jpg",
    "https://www.e-bogu.com/v/vspfiles/assets/images/cat_bokken.jpg"
];

let intervalRef;

export default class Picture extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedPic: picList[0],
            pointer: 0
        }
    }

    componentDidMount() {
        intervalRef = setInterval(() => {
            this.setState({
                selectedPic: picList[this.state.pointer % picList.length],
                pointer: this.state.pointer + 1
            });
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(intervalRef);
    }

    render() {
        return (
            <div className="picture">
                <img src={this.state.selectedPic}/>
            </div>
        )
    }
}