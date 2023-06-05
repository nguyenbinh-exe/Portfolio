import React from "react";

const Info = () => {
  return (
      <div className="about_info grid">
          <div className="about_box">
              <h3 className="about_title">Education <i className="uil uil-graduation-cap"></i></h3>
              <span className="about_subtitle">Expected Graduation in Dec. 2023</span>
          </div>
          <div className="about_box">
              <h3 className="about_title">Experience <i className="uil uil-award-alt"></i></h3>
              <span className="about_subtitle">Entry Level</span>
          </div>
          <div className="about_box">
              <h3 className="about_title">Occupation <i className="uil uil-briefcase-alt"></i></h3>
              <span className="about_subtitle">Student</span>
          </div>
      </div>
  )
}

export default Info