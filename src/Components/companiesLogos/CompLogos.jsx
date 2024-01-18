import React from "react";
import Image1 from './Logos/JP Morgan.svg'
import Image2 from './Logos/Samsung.svg'
import Image3 from './Logos/Tinder.svg'
import Image4 from './Logos/Verizon.svg'
import Image5 from './Logos/Visa.svg'
import Image6 from './Logos/Walmart.svg'

const CompLogos = () => {
  return (
    <div className="row mx-auto mb-5" >
      <img src={Image1} alt="JP Morgan" className="logo-img col-2"   />
      <img src={Image2} alt="Samsung" className="logo-img col-2" />
      <img src={Image3} alt="Tinder" className="logo-img col-2" />
      <img src={Image4} alt="Verizon" className="logo-img col-2" />
      <img src={Image5} alt="Visa" className="logo-img col-2" />
      <img src={Image6} alt="Walmart" className="logo-img col-2"  />
    </div>
  );
};

export default CompLogos;
