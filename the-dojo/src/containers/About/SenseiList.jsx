import React, { Component } from "react";

export default class SenseiList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            senseiList: [
                {name: "Koichi Suyama", kanji: "陶山晃一", rank: "7th Dan - Kyoshi", position: null },
                {name: "Atsushi Kajioka ", kanji: "梶岡 敦", rank: "6th Dan Renshi", position: "Head Instructor (主任教師)" },
                {name: "Naohisa Nakada", kanji: "中田直久", rank: "6th Dan", position: "" },
                {name: "Akira Banchi", kanji: "番地　章", rank: "6th Dan", position: "" },
                {name: "Masanao Fukuno", kanji: "福野正直", rank: "6th Dan", position: "" },
                {name: "Hayato Mitsuishi", kanji: "三石勇人", rank: "５th Dan", position: "" },
                {name: "Goichiro Takayama", kanji: "高山五一郎", rank: "5th Dan", position: "" },
                {name: "Heejoo Lee", kanji: "李 希柱", rank: "5th Dan", position: "" },
                {name: "Sigeko Nakamura", kanji: "中村繁子", rank: "4th Dan", position: "" }
            ]
        }
    }

    render() {
        return (
            <ul className="sensei-list">
                {
                    this.state.senseiList.map((sensei, idx) => (
                        <li key={idx}>
                            <div>{ `${sensei.name}` }</div>
                            <div>{ `${sensei.kanji}` }</div>
                            <div>{ `${sensei.rank} ${sensei.position}` }</div>
                        </li>
                    ))
                }
            </ul>
        )
    }
}