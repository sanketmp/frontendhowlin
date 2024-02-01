import "../../assets/styles/Clients.css";
import { clients } from "../../assets/constants/links";

const Clients = () => {
  return (
    <section id="client">
      <div className="client-container">
        <h2 className="client-head-text">Clients we work with</h2>
        <div className="container-client">
          <ul>
            {clients.map((s) => {
              return (
                <li key={s.to}>
                  <div className="image-container">
                    <img
                      className="client-img"
                      loading="lazy"
                      src={s.srcCover}
                      alt="Cover-Image"
                    />
                    <div className="hoverimg">
                      <a href={s.to} target="_blank">
                        <img
                          className="client-img"
                          loading="lazy"
                          src={s.src}
                          alt="Clients' Logo"
                        />
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <ul>
            {clients.map((s) => {
              return (
                <li key={s.to}>
                  <div className="image-container">
                    <img
                      className="client-img"
                      loading="lazy"
                      src={s.srcCover}
                      alt="Cover-Image"
                    />
                    <div className="hoverimg">
                      <a href={s.to} target="_blank">
                        <img
                          className="client-img"
                          loading="lazy"
                          src={s.src}
                          alt="Clients' Logo"
                        />
                      </a>
                    </div>
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

export default Clients;
