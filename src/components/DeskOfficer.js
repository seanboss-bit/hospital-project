import React from "react";
import { Link } from "react-router-dom";

const DeskOfficer = () => {
  return (
    <div>
      {/*Navbar  */}
      <div className="navbar">
        <div className="container navitem">
          <div className="navHeader">
            <Link to="/" className="a">
              <h5>Hospital Project</h5>
            </Link>
          </div>
          <div className="navLinks">
            <Link to="/services" className="a">
              Services
            </Link>
            <Link to="/card" className="a">
              Card Registration
            </Link>
            <Link to="/eyeclinic" className="a">
              Eye Clinic
            </Link>
            <Link to="/intensivecare" className="a">
              Intensive Care Unit
            </Link>
            <Link to="/premarital" className="a">
              Pre Marital
            </Link>
            <Link to="/ultrasound" className="a">
              Ultra Sound
            </Link>
            <Link to="/labtest" className="a">
              Lab Tset
            </Link>
          </div>
        </div>
      </div>
      <div className="showcase">
        <div className="container">
          <div className="showcase-header">
            <h3>Welcome To Our Project Hospital</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              doloribus.
            </p>
          </div>
        </div>
      </div>
      <div className="aboutus">
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            sapiente quae error facilis quaerat qui modi delectus dolores
            adipisci explicabo nesciunt cum dolore, debitis necessitatibus,
            nobis voluptate? Saepe, iusto odio. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Vitae voluptate non est eveniet
            voluptas quas autem labore molestias! Doloribus quis temporibus
            officia laudantium recusandae non eveniet voluptatem tempora aliquam
            at.
          </p>
        </div>
      </div>
      <div className="physio-section">
        <div className="container">
          <div className="row">
            <div className="col-8"></div>
            <div className="col-4 pt-5 sean">
              <h4>PysioTherapy Has And Always Will Be Good</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                quia!
              </p>
              <Link to="/services" className="seanbtn btn">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="services">
        <div className="service">
          <div className="service-content">
            <div className="container">
              <div className="service-stuff">
                <h4>Medical Fitness</h4>
                <Link to="/services" className="seanbtn btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="service-content">
            <div className="container">
              <div className="service-stuff">
                <h4>Dressing of Wound</h4>
                <Link to="/services" className="seanbtn btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeskOfficer;
