import React from "react";
import "./ComingSoonPage.css";
import penGuin from "../../assets/peguin.png";

const ComingSoonPage = () => {
  return (
    <div className="container">
      <h3 className="text">Coming</h3>
      <img src={penGuin} alt="Penguin" />
      <h3 className="text">Soon</h3>
    </div>
  );
};

export default ComingSoonPage;
