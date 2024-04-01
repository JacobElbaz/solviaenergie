import React from "react";
import CountUp from "react-countup";

function CountUpBanner() {
  return (
    <div className="counter-banner">
      <div className="counter">
        <h1>
          <CountUp end={8000} duration={2.75} prefix="+" enableScrollSpy></CountUp>
        </h1>
        <p>
          Projets de renovations valorises
        </p>
      </div>
      <div className="counter">
        <h1>
          <CountUp end={30} duration={2.75} prefix="+" enableScrollSpy></CountUp>
        </h1>
        <p>
          Installateurs patenaires
        </p>
      </div>
      <div className="counter">
        <h1>
          <CountUp end={52} duration={2.75} enableScrollSpy></CountUp>
        </h1>
        <p>
          Departements couverts
        </p>
      </div>
    </div>
  );
}

export default CountUpBanner;
