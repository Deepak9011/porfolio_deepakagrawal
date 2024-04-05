import React from "react";
import "./PortFolio.css";
import Ecommerce from "../../img/Ecommerce.jpg";
import Recogniotion from "../../img/recognition.jpg";
import Hospital from "../../img/hospital_management.png";
import Hotel from "../../img/Hotem_management.jpg";
import openGL from "../../img/openGL.jpeg";

import "swiper/css";

import { themeContext } from "../../Context";
import { useContext } from "react";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      {/*Heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/*slider*/}
      <div className="projects">
        <div>
          <h3>Hospital Management System</h3>
          <img src={Hospital} alt="" />

          <p style={{ color: darkMode ? "white" : "" }}>Technologies Uses :-</p>
          <p style={{ color: darkMode ? "white" : "" }}>
            {/* (HTML,CSS,JavaScript,AOS JS) */}
            (HTML,CSS,JavaScript,Node.js,MONGODB)
          </p>
          <p>
            This is a website designed for internal functioning of a Hospital.
            It can be used for booking purposes by the Patients.
          </p>

          <button className="button">
            <a
              href="https://github.com/Abhishek572002/Hospital_Appointment_manahgement-using-HTML-CSS-JS-AND-NODEJS-AND-MONGODB-open-source-NoSQL-databas-"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project Repository
            </a>
          </button>
        </div>
        <div>
          <h3>E-Commerce web</h3>
          <img src={Ecommerce} alt="" />
          <p style={{ color: darkMode ? "white" : "" }}>Technologies Uses :-</p>
          <p style={{ color: darkMode ? "white" : "" }}>(PUG,CSS,JavaScript,Node.js,Mysql)</p>
          <p>
            This is a website designed for internal functioning of a book selling
            and Purchasing for inside campus IIT INDORE. It can be used for buying
            and selling the old books inside the campus.
          </p>


          <button className="button">
            <a
              href="https://github.com/Abhishek572002/GraBook"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project Repository
            </a>
          </button>
        </div>
        <div>
          <h3>Hotel Management</h3>
          <img src={Hotel} alt="" />

          <p style={{ color: darkMode ? "white" : "" }}>Technologies Uses :-</p>
          <p style={{ color: darkMode ? "white" : "" }}>
            (HTML,CSS,JavaScript,Node.js,Express.js,MySQL)
          </p>
          <p>
            This is a website designed for internal functioning of a hotel. 
            It can be used for booking purposes by the receptionist. It also
             provides support system and utility for the guests. From management 
             of housekeepers to restaurant , it provides a wide range of solutions.
          </p>
          <button className="button">
            <a
              href="https://github.com/Abhishek572002/Hotel-management"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project Repository
            </a>
          </button>
        </div>
        <div>
          <h3> Handwritten Alphabet Recognition </h3>
          <img src={Recogniotion} alt="" />
          <p style={{ color: darkMode ? "white" : "" }}>Technologies Uses :-</p>
          <p style={{ color: darkMode ? "white" : "" }}>
            (Python , MNIST DATASET)
          </p>
          <p>
            This is a Web for HandWritten Alphabet Recognition using 
            Python libraries and Pygame for window to write using MNIST Dataset
          </p>
          <button className="button">
            <a
              href="https://github.com/Abhishek572002/HandWritten_Alphabet_Recognition_using_pygame-mnist_dataset"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project Repository
            </a>
          </button>
        </div>
        <div>
          <h3>3D_POD-BUILDING_USING_openGL(C++) </h3>
          <img src={openGL} alt="" />

          <p style={{ color: darkMode ? "white" : "" }}>Technologies Uses :-</p>
          <p style={{ color: darkMode ? "white" : "" }}>( C++ using Opengl libraries)</p>
          <p>
            Making a 3D model of POD Building of IIT INDORE with finished structures, 
            roads, trees, and other items is a part of POD building using OpenGL. 
            As a result, viewers are able to observe and explore this
            model in real-time while looking at the city from various 
            angles and viewpoints.
          </p>
          <button className="button">
            <a
              href="https://github.com/Abhishek572002/3D_POD_USING_openGL#likhith-raj-dv-----cse200001039iitiacin"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project Repository
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
