import { useState } from "react";
import leg from "../../assets/images/legend.svg";
import serv from "../../assets/images/serv.svg";
import "../../assets/styles/Services.css";

const Services = () => {
  const [activeClass, setActiveClass] = useState(3);

  return (
    <section id="services">
      <div className="service-container">
        <div className="service-list-legend">
          <ul className="ul-list">
            <li
              onClick={() => setActiveClass(1)}
              className={activeClass === 1 ? "li-item" : "list-item"}
            >
              STRATEGY AND CONSULTING
            </li>
            <li
              onClick={() => setActiveClass(2)}
              className={activeClass === 2 ? "li-item" : "list-item"}
            >
              ONLINE MARKETING EXPERIENCES
            </li>
            <li
              onClick={() => setActiveClass(3)}
              className={activeClass === 3 ? "li-item" : "list-item"}
            >
              COMMERCE SOLUTIONS
            </li>
            <li
              onClick={() => setActiveClass(4)}
              className={activeClass === 4 ? "li-item" : "list-item"}
            >
              GROWTH MARKETING
            </li>
            <li
              onClick={() => setActiveClass(5)}
              className={activeClass === 5 ? "li-item" : "list-item"}
            >
              ASSET CREATION
            </li>
          </ul>
          <div className="legend">
            <img src={leg} alt="Legend" className="legend-img" />
          </div>
        </div>
        <div className="flex">
          <div className="chart">
            <img src={serv} alt="ChartDiagram" />
          </div>
          <div className="diver">
            <span>
              <strong>Dive Deeper</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
