import React from "react";
import "./Works.css";

import javascricpt from "../../img/js.png";
import github from "../../img/github.png";
import mongo from "../../img/mongo.png";
import node from "../../img/node1.png";
import React1 from "../../img/react.png";

import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>Enhanced in All</span>
        <span>these languages</span>
        <span>
          Gains depth knowledge in all these framewoks and libraries
          <br />
          Can make advance level apps and softwere using these services
          <br />
        </span>

        <button className="button s-button">Hire Me</button>

        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>
      {/* right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={React1} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={github} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={javascricpt} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={mongo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={node} alt="" />
          </div>
        </motion.div>
        {/* background circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
