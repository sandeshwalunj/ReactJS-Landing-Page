import React from "react";
import Spense from './Spense.png';
import YelpCamp from './YelpCamp.png';
const Article = () => {
  return <div className="row mx-auto my-4 text-white">
   <div className="col-6">
    <img src={Spense} alt="spens.jpg" />
    <h1 className="my-2 py-2">Spense.com<span class="material-symbols-outlined">
arrow_right_alt
</span></h1>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat minima distinctio quo quisquam corporis, exercitationem nemo veniam vitae tempora ipsa non voluptate dignissimos voluptatem dolore quaerat pariatur cum! Molestiae, voluptas.</p>
   </div>
   <div className="col-6">
    <img src={YelpCamp} alt="spens.jpg" />
    <h1 className=" my-2 py-2">Spense.com<span class="material-symbols-outlined">
arrow_right_alt
</span></h1>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat minima distinctio quo quisquam corporis, exercitationem nemo veniam vitae tempora ipsa non voluptate dignissimos voluptatem dolore quaerat pariatur cum! Molestiae, voluptas.</p>
   </div>
  </div>;
};

export default Article;
