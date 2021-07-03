import React from "react";
import NewsCard from "../../components/NewsCard";

export default (props) => {
    const newsList = [
        // { title: "West LA Dojo is closed due to COVID19 pandemic until further notice", src: "https://www.ut.edu/uploadedImages/Student_Services/Health_and_Wellness_Center/Coronavirus-COVID-19.jpg" },
        { title: "SCKF Memorial Tournament Senior Div. 1st Place Banchi Sensei", src: "http://wlakendo.org/images/news/memorial_tournament.jpg" },
        { title: "Celebrating Our New 6th Dan Senseis", src: "http://wlakendo.org/images/news/6_dan_cele.jpg" },
        { title: "2018 SCKO Christmas Tournament", src: "http://wlakendo.org/images/news/2018_SCKO_christmas.jpg" }
    ];
    return (
        <div className="home-news content-section-container-lg">
            <h1>Latest News</h1>

            <div className="breaking-news">
                <div className="news-warning">
                    WLA Dojo resumed on May 15 with fully vaccinated members.
                    When you're 2 weeks after the second shots of Pfizer/Modena, and one shot of Johnson&Johnson. Please make your way back to dojo practice( registered WLA members only)!
                </div>
            </div>
            <div className='home-news-temp'>
                <div className='home-news-temp-schedule'>
                    {/* <b>Online Suburi Class started during the facility closure. Please contact WLA Dojo for log in info.</b>
                    <div className='temp-schedule-item'>
                        <b>Tuesdays</b>
                        <div>7:30PM-8PM /Basic Suburi</div>
                        <div>8PM-8:30PM /Advanced Suburi</div>
                    </div>
                    <div className='temp-schedule-item'>
                        <b>Thursdays (1st, 3rd only)</b>
                        <div>7:30PM-8PM /Basic Suburi</div>
                        <div>8PM-8:30PM /Advanced Suburi</div>
                    </div>
                    <div className='temp-schedule-item'>
                        <b>Saturdays</b>
                        <div>6PM-6:30PM /Basic Suburi</div>
                        <div>6:30PM-7M /Advanced Suburi</div>
                    </div> */}
                    <h3><b>Practice hours:</b></h3>
                    <div className='temp-schedule-item'>
                        <b>Tuesdays</b>
                        <div>7:30PM~</div>
                    </div>
                    <div className='temp-schedule-item'>
                        <b>Saturdays</b>
                        <div>6PM~</div>
                    </div>
                </div>
                <div className='home-news-temp-image'>
                    <img src='http://wlakendo.org/images/news/reopen_2021.jpg'></img>
                </div>
            </div>

            <div>
                {newsList.map((news, idx) => <NewsCard {...news} key={idx}/>)}
            </div>
        </div>
    )
}