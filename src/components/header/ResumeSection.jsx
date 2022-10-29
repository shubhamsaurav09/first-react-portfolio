import React from "react";
import CV from "../../assets/myCV.pdf";

function ResumeSection() {
  return (
    <div className="resume_section">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}

export default ResumeSection;
