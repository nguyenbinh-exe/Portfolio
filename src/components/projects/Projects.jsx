import React, {useState} from "react";
import "./projects.css";

const Projects = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index)
    };
  return (
      <section className="projects section" id="projects">
        <h2 className="section_title">Projects</h2>
        <span className="section_subtitle">My projects</span>

        <div className="projects_container container grid">
            <div className="projects_content">
                <div>
                    <i className="uil uil-folder"></i>
                    <h3 className="projects_title">Fuel Company Website</h3>
                </div>
                <span className="projects_button" onClick={() => toggleTab(1)}>
                    View <i className="uil uil-arrow-right projects_button-icon"></i>
                </span>

                <div className={toggleState === 1 ?
                    "projects_model active-model" : "projects_model"}>
                    <div className="projects_model-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times projects_model-close"></i>
                        <h3 className="projects_model-title"><i className="uil uil-users-alt"></i> Fuel Company</h3>
                        <p className="projects_model-description">A school group project to deploy a full-stack application of a website that allows a user to create an account, order fuel, and store their order(s) in a database.</p>

                        <ul className="projects_model-projects grid">
                            <li className="projects_model-project">
                                <i className="uil uil-check-circle projects_model-icon"/>
                                <p className="projects_model-info">Extended JavaScript (EJS)</p>
                            </li>
                            <li className="projects_model-project">
                                <i className="uil uil-check-circle projects_model-icon"/>
                                <p className="projects_model-info">NodeJS</p>
                            </li>
                            <li className="projects_model-project">
                                <i className="uil uil-check-circle projects_model-icon"/>
                                <p className="projects_model-info">Bootstrap CSS</p>
                            </li>
                            <li className="projects_model-project">
                                <i className="uil uil-check-circle projects_model-icon"/>
                                <p className="projects_model-info">NoSQL (MongoDB)</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="projects_content">
                <div>
                    <i className="uil uil-folder"></i>
                    <h3 className="projects_title">Personal CV Website</h3>
                </div>
                <span className="projects_button" onClick={() => toggleTab(2)}>
                    View <i className="uil uil-arrow-right projects_button-icon"></i>
                </span>

                <div className={toggleState === 2 ?
                    "projects_model active-model" : "projects_model"}>
                    <div className="projects_model-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times projects_model-close"></i>
                        <h3 className="projects_model-title"><i className="uil uil-user"></i> Personal CV</h3>
                        <p className="projects_model-description">A personal ReactJS project to create and deploy a fully responsive personal portfolio website.</p>

                        <ul className="projects_model-projects grid">
                            <li className="projects_model-project">
                                <i className="uil uil-check-circle projects_model-icon"/>
                                <p className="projects_model-info">HTML</p>
                            </li>
                            <li className="projects_model-project">
                                <i className="uil uil-check-circle projects_model-icon"/>
                                <p className="projects_model-info">CSS</p>
                            </li>
                            <li className="projects_model-project">
                                <i className="uil uil-check-circle projects_model-icon"/>
                                <p className="projects_model-info">ReactJS</p>
                            </li>
                            <li className="projects_model-project">
                                <i className="uil uil-check-circle projects_model-icon"/>
                                <p className="projects_model-info">NodeJS</p>
                            </li>
                            <li className="projects_model-project">
                                <i className="uil uil-check-circle projects_model-icon"/>
                                <p className="projects_model-info">EmailJS</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="projects_content">
                <div>
                    <i className="uil uil-folder"></i>
                    <h3 className="projects_title">Unity Game</h3>
                </div>
                <span className="projects_button" onClick={() => toggleTab(3)}>
                    View <i className="uil uil-arrow-right projects_button-icon"></i>
                </span>

                <div className={toggleState === 3 ?
                    "projects_model active-model" : "projects_model"}>
                    <div className="projects_model-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times projects_model-close"></i>
                        <h3 className="projects_model-title"><i className="uil uil-user"></i> Unity Game</h3>
                        <p className="projects_model-description">A school project to design characters, their functionalities, a scene, and a game script.</p>

                        <ul className="projects_model-projects grid">
                            <li className="projects_model-project">
                                <i className="uil uil-check-circle projects_model-icon"/>
                                <p className="projects_model-info">C#</p>
                            </li>
                            <li className="projects_model-project">
                                <i className="uil uil-check-circle projects_model-icon"/>
                                <p className="projects_model-info">Unity</p>
                            </li>
                            <li className="projects_model-project">
                                <i className="uil uil-check-circle projects_model-icon"/>
                                <p className="projects_model-info">Clip Studio Paint</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </section>
  )
}

export default Projects