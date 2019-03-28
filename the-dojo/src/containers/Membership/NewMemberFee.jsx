import React from "react";

export default () => (
    <div className="content-section-body">
        <h2>New Member Fees</h2>
        <p>See chart below for the new member fee.</p>
        <table>
            <thead>
                <tr>
                    <th style={{width: "300px"}}>Description</th>
                    <th style={{width: "120px"}}>Adult</th>
                    <th style={{width: "270px"}}>17 {"&"} Under or Full-Time Student</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>One-time Registration Fee</td>
                    <td>$30</td>
                    <td>$30</td>
                </tr>
                <tr>
                    <td>Tuition(first 2 months)</td>
                    <td>$80</td>
                    <td>$80</td>
                </tr>
                <tr>
                    <td>AUSKF Annual Fee*</td>
                    <td>$70</td>
                    <td>$40</td>
                </tr>
                <tr>
                    <td>SCKO Annual Fee</td>
                    <td>$35</td>
                    <td>$25</td>
                </tr>
                <tr className="total">
                    <td>Total</td>
                    <td>$215</td>
                    <td>$175</td>
                </tr>
            </tbody>
        </table>
        <h5>* AUSKF Fee will be $10 lower from the following year</h5>
        <p>Family discount: if you join as family, 2nd(more) person would get half price of monthly tuition($20 per month).</p>
    </div>
)