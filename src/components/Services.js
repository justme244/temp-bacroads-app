import Title from "./Titles";
import { services } from "../Data";
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title={"Our"} subtitle={"Services"} />
      <div className="section-center services-center">
        {services.map((service) => {
          const { icon, title, subtitle } = service;
          return (
            <article className="service">
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{subtitle}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
