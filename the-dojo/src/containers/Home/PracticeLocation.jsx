import React, { Fragment } from "react";

const locationUrl = `https://www.google.com/maps?q=2110+Corinth+Ave+90025+us&oe=utf-8&rls=org.mozilla:en-US:official&client=firefox-a&um=1&ie=UTF-8&split=0&gl=us&ei=OcyQSajBNZzgM8u01fML&sa=X&oi=geocode_result&resnum=1&ct=title`;
export default () => (
    <Fragment>
        <h5>Location</h5>
        <p>Japanese Cultural Institute of Sawtelle</p>
        <p>2110 Corinth Avenue </p>
        <p>Los Angeles CA 90025</p>

        <a href={locationUrl}>Driving Directions</a>
    </Fragment>
)