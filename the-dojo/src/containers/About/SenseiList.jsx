import React, { Component } from "react";

export default class SenseiList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            senseiList: [
                {name: "Koichi Suyama", kanji: "陶山晃一", rank: "7th Dan - Kyoshi", rankKanji:"教士七段", position: "", img: "koichi-suyama" },
                {name: "Kenjun Kasahara", kanji: "笠原賢順", rank: "6th Dan - Renshi", rankKanji:"錬士六段", position: "", img: "kenjun-kasahara" },
                {name: "Takashi Akiyoshi", kanji: "秋吉 崇", rank: "6th Dan - Renshi", rankKanji:"錬士六段", position: "", img: "Takashi-Akiyoshi" },
                {name: "Atsushi Kajioka ", kanji: "梶岡 敦", rank: "6th Dan - Renshi",rankKanji:"錬士六段", position: "", img: "atsushi-kajioka" },
                {name: "Naohisa Nakada", kanji: "中田直久", rank: "6th Dan", rankKanji:"六段", position: "", img: "naohisa-nakada" },
                {name: "Akira Banchi", kanji: "番地　章", rank: "6th Dan - Renshi", rankKanji:"錬士六段", position: "Head Instructor (主任教師)", img: "akira-banchi" },
                {name: "Masanao Fukuno", kanji: "福野正直", rank: "6th Dan", rankKanji:"六段", position: "", img: "masanao-fukuno" },
                {name: "Hayato Mitsuishi", kanji: "三石勇人", rank: "5th Dan", rankKanji:"五段", position: "", img: "hayato-mitsuishi" },
                {name: "Goichiro Takayama", kanji: "高山五一郎", rank: "5th Dan", rankKanji:"五段", position: "", img: "goichiro-takayama" },
                {name: "Heejoo Lee", kanji: "李 希柱", rank: "5th Dan", rankKanji:"五段", position: "", img: "heejoo-lee" },
                {name: "Victor Shin", kanji: "申 明學", rank: "5th Dan", rankKanji:"五段", position: "", img: "victor-shin" },
                {name: "Sigeko Nakamura", kanji: "中村繁子", rank: "4th Dan", rankKanji:"四段", position: "", img: "shigeko-nakamura" },
                {name: "Jason Javis", kanji: "ジェイソン　ジャービス", rank: "4th Dan", rankKanji:"四段", position: "", img: "jason_javis" },
                {name: "Chris Ha", kanji: "河尚辰", rank: "4th Dan", rankKanji:"四段", position: "", img: "chris_ha" },
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
                                <h5>{ `${sensei.rankKanji}` }</h5>
                                <h5 className="head-instructor">{ `${sensei.position}` }</h5>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}