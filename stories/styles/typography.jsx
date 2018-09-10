import React from "react";
import variables from '../../src/library/styles/variables.json';
import styles from '../../src/library/styles/utilities/typography.scss';

const TYPOGRAPHY = variables.typography;

const Typography = () => {
  return (
    <div className="main-section">
      <h1>Typography</h1>
      {
        Object.entries(TYPOGRAPHY).map(([key, value]) => (
          <div className="typography-wrapper" key={key}>
            <div className="small-text"><small>Heading {key} <span style={{textTransform: 'lowercase'}}>(class: heading-{key})</span></small></div>
            <div className={`heading-${key}`}>Practo Medicine Story Book</div>
          </div>
        ))
      }
    </div>
  );
};

export default Typography;
