import React from "react";
import NewsCard from "../../components/NewsCard";

export default (props) => {
    const newsList = [
        { title: "SCKF Memorial Tournament Senior Div. 1st Place Banchi Sensei", src: "http://wlakendo.org/images/news/memorial_tournament.jpg" },
        { title: "Celebrating Our New 6th Dan Senseis", src: "http://wlakendo.org/images/news/6_dan_cele.jpg" },
        { title: "2018 SCKO Christmas Tournament", src: "http://wlakendo.org/images/news/2018_SCKO_christmas.jpg" }
    ]
    return (
        <div className="home-news content-section-container-lg">
            <h1>Latest News</h1>
            <div>
                { newsList.map(news => <NewsCard {...news}/>) }
            </div>
        </div>
    )
}