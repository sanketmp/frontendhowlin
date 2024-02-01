import "../../assets/styles/Track.css";

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
            <li className="item">
              <div className="hire-container">
                <div>
                  <img
                    src="https://howl.in/wp-content/uploads/2023/06/amazon-case-study.jpg"
                    alt="Hiring"
                    className="imge"
                  />
                </div>
                <div className="hoverimg" />
              </div>
            </li>
            <li className="item">
              <div className="hire-container">
                <div>
                  <img
                    src="https://howl.in/wp-content/uploads/2023/06/amazon-case-study.jpg"
                    alt="Hiring"
                    className="imge"
                  />
                </div>
                <div className="hoverimg" />
              </div>
            </li>
            <li className="item">
              <div className="hire-container">
                <div>
                  <img
                    src="https://howl.in/wp-content/uploads/2023/06/amazon-case-study.jpg"
                    alt="Hiring"
                    className="imge"
                  />
                </div>
                <div className="hoverimg" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Track;
