import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Pfetch } from "./Pfetch";

//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <Pfetch />
    </div>
  );
};

export default Home;
