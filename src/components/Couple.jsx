import React from "react";
import "../styles/Couple.css";

function Couple() {
    return (
        <section id="couple">
            <h1 className="title-quote">Happy Couple Going To Be Engaged</h1>

            <div className="row">
                <div className="col-lg-5" data-aos="fade-up">
                    {/* <div className="img-wrapper">
                        <img
                            className="couple-img"
                            src="../assets/images/groom.png"
                            alt="Groom_img"
                        />
                    </div> */}
                    <div
                        id="carouselIndicators"
                        className="carousel slide"
                        data-interval="2000"
                        data-ride="carousel"
                    >
                        <ol className="carousel-indicators">
                            <li
                                data-target="#carouselIndicators"
                                data-slide-to="0"
                                className="active"
                            ></li>
                            <li
                                data-target="#carouselIndicators"
                                data-slide-to="1"
                            ></li>
                            <li
                                data-target="#carouselIndicators"
                                data-slide-to="2"
                            ></li>
                            <li
                                data-target="#carouselIndicators"
                                data-slide-to="3"
                            ></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="img-wrapper">
                                    <img
                                        className="couple-img"
                                        src="../assets/images/groom1.png"
                                        alt="couple_img"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-wrapper">
                                    <img
                                        className="couple-img"
                                        src="../assets/images/groom2.jpeg"
                                        alt="couple_img"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-wrapper">
                                    <img
                                        className="couple-img"
                                        src="../assets/images/groom3.png"
                                        alt="couple_img"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="img-wrapper">
                                    <img
                                        className="couple-img"
                                        src="../assets/images/groom4.png"
                                        alt="couple_img"
                                    />
                                </div>
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#carouselIndicators"
                            role="button"
                            data-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselIndicators"
                            role="button"
                            data-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <div className="info groom-info">
                        <h3>
                            D. Muhammad Safdar, <sub>B. Tech.</sub>
                        </h3>
                        <p>
                            <strong>
                                Procurement Officer at Find Office & Hygiene
                                Solutions,
                            </strong>
                            Abu - Dhabi, UAE.
                        </p>
                        <p className="mt-2">
                            Grand S/O Mohammed Ismail Sahab(Late)
                        </p>
                        <p className="mt-2">
                            S/O D. Siddiq Hazrath Sahab,
                            <br /> Retd. Head Master of Masoodia Urdu Medium
                            School,
                            <br />
                            Adoni.
                        </p>
                    </div>
                </div>
                <div
                    className="col-lg-2"
                    data-aos="zoom-out "
                    data-aos-delay="300"
                >
                    <img
                        className=" heart-mid"
                        src="../assets/images/heart.png"
                        alt="heart_img"
                    />
                </div>
                <div className="col-lg-5" data-aos="fade-up">
                    <div className="img-wrapper">
                        <img
                            className="couple-img"
                            src="../assets/images/bride.png"
                            alt="Bride_img"
                        />
                    </div>

                    <div className="info">
                        <h3>K. Habiba urf Anam</h3>
                        <p>Grand D/O K. Basheer Ahmed Sahab(Late)</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Couple;
