import React from "react";
import "./experience.css";
import { TbBrandReactNative, TbBrandFirebase  } from "react-icons/tb";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiRedux,
  SiReduxsaga,
  // SiMicrosoftsqlserver,
} from "react-icons/si";
import LinearProgress from '@mui/material/LinearProgress';

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frameworks & Libraries</h3>
          <div className="experience_content">
            <article className="experience_details">
              <SiReact className="experience_details-icons" />
              <div className="skill_block">
                <h4>React</h4>
                <LinearProgress className="progress_block" variant="determinate" value={75} />
              </div>
            </article>
            <article className="experience_details">
              <TbBrandReactNative className="experience_details-icons" />
              <div className="skill_block">
                <h4>React Native</h4>
                <LinearProgress className="progress_block" variant="determinate" value={33} />
              </div>
            </article>
            <article className="experience_details">
              <TbBrandFirebase  className="experience_details-icons" />
              <div className="skill_block">
                <h4>LIT</h4>
                <LinearProgress className="progress_block" variant="determinate" value={50} />
              </div>
            </article>
            <article className="experience_details">
              <SiAngular className="experience_details-icons" />
              <div className="skill_block">
                <h4>Angular</h4>
                <LinearProgress className="progress_block" variant="determinate" value={33} />
              </div>
            </article>
            <article className="experience_details">
              <SiRedux className="experience_details-icons" />
              <div className="skill_block">
                <h4>Redux</h4>
                <LinearProgress className="progress_block" variant="determinate" value={75} />
              </div>
            </article>
            <article className="experience_details">
              <SiReduxsaga className="experience_details-icons" />
              <div className="skill_block">
                <h4>Saga</h4>
                <LinearProgress className="progress_block" variant="determinate" value={50} />
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Language & Styles</h3>
          <div className="experience_content">
            <article className="experience_details">
              <SiJavascript className="experience_details-icons" />
              <div className="skill_block">
                <h4>Javascript</h4>
                <LinearProgress className="progress_block" variant="determinate" value={50} />
              </div>
            </article>
            <article className="experience_details">
              <SiTypescript className="experience_details-icons" />
              <div className="skill_block">
                <h4>Typescript</h4>
                <LinearProgress className="progress_block" variant="determinate" value={50} />
              </div>
            </article>
            <article className="experience_details">
              <SiHtml5 className="experience_details-icons" />
              <div className="skill_block">
                <h4>HTML</h4>
                <LinearProgress className="progress_block" variant="determinate" value={75} />
              </div>
            </article>
            <article className="experience_details">
              <SiCss3 className="experience_details-icons" />
              <div className="skill_block">
                <h4>CSS</h4>
                <LinearProgress className="progress_block" variant="determinate" value={75} />
              </div>
            </article>
            <article className="experience_details">
              <SiSass className="experience_details-icons" />
              <div className="skill_block">
                <h4>SCSS</h4>
                <LinearProgress className="progress_block" variant="determinate" value={75} />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
