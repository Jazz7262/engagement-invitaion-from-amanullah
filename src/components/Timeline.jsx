import React from "react";
import "../styles/Timeline.css";

function Timeline() {
    return (
        <section id="timeline">
            <h1 className="inshaallaah">Inshaallaah ...</h1>

            <div className="wrapper" data-aos="fade-up" data-aos-delay="100">
                <div className="content">
                    <h1>Engagement Ceremony</h1>
                    <p>
                        On Sunday, 02<sup>nd</sup> October, 2022,
                        <br />
                        05<sup>th</sup> of Rabbi-ul-Awwal, 1443,
                        <br />
                        Time: 02:00 PM.
                    </p>
                    <h2>Venue:</h2>
                    <p>
                        KKB Function Hall,
                        <br /> APHB Colony, AAS College Rood,
                        <br /> Adoni - 518 301.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Timeline;
