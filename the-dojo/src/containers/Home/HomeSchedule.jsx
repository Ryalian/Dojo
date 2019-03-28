import React from "react";
import { Link } from "react-router-dom";

export default () => (
    <div className="content-section-container-lg">
        <table>
            <thead>
                <tr>
                    <th className="table-title">Practice Schedule</th>
                    <th className="table-header">Tuesdays</th>
                    <th className="table-header">Thursdays*</th>
                    <th className="table-header">Saturdays</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="fade-text">Regular Practice</td>
                    <td>7:30pm-9:00pm</td>
                    <td>7:30pm-9:00pm</td>
                    <td>6:00pm-8:00pm</td>
                </tr>
                <tr>
                    <td className="fade-text">Advanced Practice</td>
                    <td>9:00pm-10:00pm</td>
                    <td>9:00pm-10:00pm</td>
                    <td>8:00pm-9:00pm</td>
                </tr>
            </tbody>
        </table>
        <div className="home-schedule-footer">
            <div className="home-schedule-footer-left"><Link className="fade-text" to="/schedule">View Calendar</Link></div>
            <div className="home-schedule-footer-right"><h6 className="fade-text">* Thursday practice is held on 1st/3rs/5th week of the month only</h6></div>
        </div>
    </div>
)