import React from "react";

import Description from "./Components/section/Description";
import CompLogos from "./Components/companiesLogos/CompLogos";
import Navbar from "./Components/Navbar/Navbar";
import Article from "./Components/article/Article";
import Details from "./Components/details/Details";
import Details2 from "./Components/datails2/Details2";
import Footer from "./Components/footer/Footer";

const App = () => {
  return (
    <>
      <div style={{ backgroundColor: "black",fontFamily:'Playfair Display,serif' }}>
        <div className="container">
          <Navbar />
          <Description />
          <CompLogos />
          <Article />
        </div>
        <div className="bg-dark text-white container-fluid">
          <div className="container mx-auto">
            <Details />
          </div>
        </div>
        <div
          style={{ backgroundColor: "black" }}
          className="text-white container-fluid"
        >
          <div className="container mx-auto">
            <Details2 />
          </div>
        </div>
        <div className="bg-dark container-fluid">
          <div className="container text-white py-3">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
