import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Pursuing the newly introduced Bachelor of Arts and Sciences
                program under faculty of Social Sciences, with a major in
                Interdisciplinary Studies, covering a wide range of disciplines
                from Faculties of Arts, Sciences and Social Sciences. Intended
                Concentration in Food Studies, with a minor in History
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Cameras, Exposure and Photography Cameras, Exposure and Photography 
                  </h5>
                  <h5>Michigan State University
                  </h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Creative Thinking: Techniques and Tools for Success</h5>
                  <h5>Imperial College London</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Introduction to Food and Nutrition Introduction to Food and Nutrition </h5>
                  <h5>Stanford University</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
