import React from "react";
import animalfarming from "../assets/slides/tomosi-cows.jpg";
import aerialpic from "../assets/slides/farm-aerial.jpg";
import largscale from "../assets/slides/tomosi-grounds.jpg";
import dairypic from "../assets/slides/frasian-cows.jpg";
import clsx from "clsx";
const WhatWeDo = () => {
  const expertise = [
    {
      title: "Dairy farming",
      image: animalfarming,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: " Mechanised Farming",
      image: aerialpic,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Animal Rearing",
      image: dairypic,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Large Scale Farming",
      image: largscale,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];
  return (
    <div className="py-5">
      <div className="container">
        <h1 className="mb-4">What We Do</h1>

        <div className="content">
          {expertise.map((expert, index) => (
            <div
              className={clsx("row", index % 2 !== 0 && "flex-md-row-reverse")}
              key={index}
            >
              <div
                className="col-sm-12 col-md-6 bg_exp"
                style={{
                  background: `url(${expert.image}) no-repeat scroll center / cover`,
                }}
              ></div>
              <div className="col-sm-12 col-md-6 d-flex align-items-start justify-content-center flex-column">
                <div className={clsx(index % 2 ===0 ? "ps-5" : "pe-5")}>
                <h3 className="">{expert.title}</h3>
                <div className="small">{expert.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
