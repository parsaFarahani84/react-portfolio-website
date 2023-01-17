import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experince__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>HTML</h4>
              <small className="text-lights">Experienced</small>
            </article>

            <article className="experince__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>CSS</h4>
              <small className="text-lights">Experienced</small>
            </article>

            <article className="experince__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Javascript</h4>
              <small className="text-lights">Experienced</small>
            </article>

            <article className="experince__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Bootstrap</h4>
              <small className="text-lights">Experienced</small>
            </article>

            <article className="experince__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Tailwind</h4>
              <small className="text-lights">Experienced</small>
            </article>

            <article className="experince__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>React</h4>
              <small className="text-lights">Experienced</small>
            </article>
          </div>
        </div>

        {/* end of front-end section */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experince__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Node Js</h4>
              <small className="text-lights">Experienced</small>
            </article>

            <article className="experince__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>MongoDB</h4>
              <small className="text-lights">Experienced</small>
            </article>

            <article className="experince__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>PHP</h4>
              <small className="text-lights">Experienced</small>
            </article>

            <article className="experince__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>MySQL</h4>
              <small className="text-lights">Experienced</small>
            </article>

            <article className="experince__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <h4>Python</h4>
              <small className="text-lights">Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
