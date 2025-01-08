import style from "../../css/project.module.css";
import Image from "next/image";
import { whoWeAre } from "@/public/data/who-we-are/whoWeAre";

const WhoWeAre = () => {
  const data = whoWeAre;

  if (!data) {
    return <h1>Data not available!</h1>;
  }

  const { title, heading, text, images, details } = data;

  return (
    <div id="about" className={style.whoWeAre}>
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className={`col-lg-6 ${style.whoContent}`}>
            <h4>{title}</h4>
            <h2>{heading}</h2>
            <p>{text}</p>
            <ul>
              {details.map((item, index) => {
                return (
                  <li key={index}>
                    <i className={item.icon}></i>
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
            <button className={style.btnCustom}>Read More</button>
          </div>
          <div className="col-lg-6 content">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {images.map((item, index) => {
                  return (
                    <>
                      <div key={index} className="carousel-item active">
                        <Image
                          className="d-block w-100"
                          src={item.img}
                          alt={item.alt}
                          width={500}
                          height={400}
                          priority={false}
                        />
                      </div>
                    </>
                  );
                })}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
