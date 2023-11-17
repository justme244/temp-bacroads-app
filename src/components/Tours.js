import Title from "./Titles";
import { tours } from "../Data";
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title={"Our"} subtitle={"Tours"} />
      <div className="section-center featured-center">
        {tours.map((tour) => {
          const {
            img,
            title,
            dates,
            subtitle,
            paraTitle,
            paraDate,
            paraPrices,
          } = tour;
          return (
            <article className="tour-card">
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{dates}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{subtitle}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {paraTitle}
                  </p>
                  <p>{paraDate}</p>
                  <p>f{paraPrices}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
