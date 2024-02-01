import "../../assets/styles/Track.css";
import { tracks } from "../../assets/constants/links";

const Track = () => {
  return (
    <section id="track">
      <div className="track-container">
        <div className="head-container">
          <h2 className="track-header-text">Keep track of the wolves</h2>
          <span id="go">&#8594;</span>
        </div>
        <div className="img-container">
          <ul className="img-items">
            {tracks.map((t) => {
              return (
                <li className="item" key={t}>
                  <div className="hire-container">
                    <img src={t} alt="Hiring" className="imge" />
                    <div className="hoverimg" />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Track;
