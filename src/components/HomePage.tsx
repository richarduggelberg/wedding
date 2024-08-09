import React from "react";
import Heart from "../../public/heart.svg";

const HomePage = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={Heart}
          alt="Heart"
          style={{ width: "100px", height: "100px" }} // You can adjust the size as needed
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>asd</div>
    </>
  );
};

export default HomePage;
