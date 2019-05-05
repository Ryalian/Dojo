import React, { Component } from "react";

export default class SenseiList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            senseiList: [
                {name: "Koichi Suyama", kanji: "陶山晃一", rank: "7th Dan - Kyoshi", position: "", img: "koichi-suyama" },
                {name: "Atsushi Kajioka ", kanji: "梶岡 敦", rank: "6th Dan - Renshi", position: "", img: "atsushi-kajioka" },
                {name: "Kenjun Kasahara", kanji: "笠原賢順", rank: "6th Dan - Renshi", position: "", img: "kenjun-kasahara" },
                {name: "Naohisa Nakada", kanji: "中田直久", rank: "6th Dan", position: "", img: "naohisa-nakada" },
                {name: "Akira Banchi", kanji: "番地　章", rank: "6th Dan", position: "Head Instructor (主任教師)", img: "akira-banchi" },
                {name: "Masanao Fukuno", kanji: "福野正直", rank: "6th Dan", position: "", img: "masanao-fukuno" },
                {name: "Hayato Mitsuishi", kanji: "三石勇人", rank: "5th Dan", position: "", img: "hayato-mitsuishi" },
                {name: "Goichiro Takayama", kanji: "高山五一郎", rank: "5th Dan", position: "", img: "goichiro-takayama" },
                {name: "Heejoo Lee", kanji: "李 希柱", rank: "5th Dan", position: "", img: "heejoo-lee" },
                {name: "Victor Shin", kanji: "申 明學", rank: "5th Dan", position: "", img: "victor-shin" },
                {name: "Sigeko Nakamura", kanji: "中村繁子", rank: "4th Dan", position: "", img: "shigeko-nakamura" }
            ]
        }
    }

    render() {
        return (
            <div className="sensei-list content-section-body">
                <h2>Our Sensei</h2>
                <ul>
                    {
                        this.state.senseiList.map((sensei, idx) => (
                            <li key={idx}>
                                <img src={ `http://wlakendo.org/assets/sensei/${sensei.img}.png`}></img>
                                <h3>{ `${sensei.name}` }</h3>
                                <h4>{ `${sensei.kanji}` }</h4>
                                <h5>{ `${sensei.rank}` }</h5>
                                <h5 className="head-instructor">{ `${sensei.position}` }</h5>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}