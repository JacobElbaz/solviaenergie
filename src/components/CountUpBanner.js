import React from "react";
import CountUp from "react-countup";

function CountUpBanner() {
  return (
    <div className="counter-banner">
      <div className="counter">
        <h1>
          <CountUp end={100} duration={2.75} enableScrollSpy></CountUp>
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, unde?
        </p>
      </div>
      <div className="counter">
        <h1>
          <CountUp end={100} duration={2.75} enableScrollSpy></CountUp>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          recusandae!
        </p>
      </div>
      <div className="counter">
        <h1>
          <CountUp end={100} duration={2.75} enableScrollSpy></CountUp>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          deleniti?
        </p>
      </div>
    </div>
  );
}

export default CountUpBanner;
