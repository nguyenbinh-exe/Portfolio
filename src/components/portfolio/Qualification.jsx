import React, {useState} from "react";
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index)
    };
    return (
        <section className="qualification section" id="timeline">
            <h2 className="section_title">Timeline</h2>
            <span className="section_subtitle">My journey</span>

            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div className={toggleState === 1 ?
                        "qualification_button qualification_active button--flex" :"qualification_button button--flex"}
                        onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification_icon"></i>
                        Education
                    </div>
                    <div className={toggleState === 2 ?
                        "qualification_button qualification_active button--flex" :"qualification_button button--flex"}
                         onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification_icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification_sections">
                    <div className={toggleState === 1 ?
                        "qualification_content qualification_content-active" : "qualification_content "}>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Houston Community College</h3>
                                <span className="qualification_subtitle">Houston, TX</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-schedule" /> Aug. 2018 - May 2021
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">University of Houston</h3>
                                <span className="qualification_subtitle">Houston, TX</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-schedule" /> Aug. 2019 - Present
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="qualification_sections">
                    <div className={toggleState === 2 ?
                        "qualification_content qualification_content-active" : "qualification_content "}>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">TinDog</h3>
                                <span className="qualification_subtitle">Web Development</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-schedule" /> Nov 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">Simon Game</h3>
                                <span className="qualification_subtitle">Web Development</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-schedule" /> Nov 2022
                                </div>
                            </div>
                        </div>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Fuel Ordering</h3>
                                <span className="qualification_subtitle">Web Development</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-schedule" /> Jan - May 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">Personal Portfolio</h3>
                                <span className="qualification_subtitle">Web Development</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-schedule" /> Jun 2023
                                </div>
                            </div>
                        </div>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">iOS Weather App</h3>
                                <span className="qualification_subtitle">iOS Development</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-schedule" /> Oct - Dec 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification