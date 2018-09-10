import React from "react";
import variables from '../../src/library/styles/variables.json';

const FontsCollection = variables['font-family'];

const Fonts = () => {
  return (
    <div className="main-section">
      <h1>Fonts</h1>

      {
        Object.entries(FontsCollection).map(([key, value]) => (
          <div key={key}>
            <div className="small-text"><small>{key}</small></div>
            <div style={{ display: "inline-block" }}>
              <div className="font-wrapper font-light" style={{ fontFamily: value }}>Aa</div>
              <div className="small-text"><small>Light</small></div>
            </div>
            <div style={{ display: "inline-block", marginLeft: "30px" }}>
              <div className="font-wrapper font-regular" style={{ fontFamily: value }}>Aa</div>
              <div className="small-text"><small>Regular</small></div>
            </div>
            <div style={{ display: "inline-block", marginLeft: "30px" }}>
              <div className="font-wrapper font-bold" style={{ fontFamily: value }}>Aa</div>
              <div className="small-text"><small>Medium</small></div>
            </div>
            <div style={{ display: "inline-block", marginLeft: "30px" }}>
              <div className="font-wrapper font-italics" style={{ fontFamily: value }}>Aa</div>
              <div className="small-text"><small>Italics</small></div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Fonts;
