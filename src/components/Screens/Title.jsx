import "../../assets/styles/Title.css";

const Title = () => {
  return (
    <section id="title">
      <div className="title-container">
        <p className="p1" id="para">
          <strong>
            We exist because we want to help you navigate and harness the
            potential of this ever-changing digital landscape.
          </strong>
        </p>
        <div className="title-area">
          <h1 className="heading">Your Growth Partners</h1>
          <img
            src="https://howl.in/wp-content/uploads/2023/04/image-1.jpg"
            alt="Your Growth Partners"
          />
        </div>
        <div id="para2">
          <p></p>
          <p className="p2" id="para">
            <strong>
              It's not a game of guesses, it's a game of numbers where growth is
              the ultimate goal. We leverage cutting-edge technology and data
              driven insights to help you answer questions that unlock growth.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Title;
