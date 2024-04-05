import Navbar from "./component/Navbar/Navbar";
import "./App.css";
import Intro from "./component/intro/Intro";
import Services from "./component/Services/Services";
import Experiance from "./component/Experiance/Experiance";
import Works from "./component/Works/Works";
import Portfolio from "./component/Portfolio/Portfolio";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background:darkMode?"black":"",
      color:darkMode?"white":""
    }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experiance />
      <Works />
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
