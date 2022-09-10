import React from "react";
import animalfarming from "../assets/slides/tomosi-cows.jpg";
import aerialpic from "../assets/slides/farm-aerial.jpg";
import largscale from "../assets/slides/tomosi-grounds.jpg";
import dairypic from "../assets/slides/frasian-cows.jpg";
import clsx from "clsx";

const WhatWeDo = () => {
  const expertise = [
    {
      title: "Dairy Farming",
      image: animalfarming,
      description:
        "Demand for milk products has been growing and so has Tomosi's Farm dairy products output. From our 1,000+ Fresian breed we have seen our milk output grow tremendously thanks to some of the modern farming practices that we have adopted at the farm.",
    },
    {
      title: " Mechanised Farming",
      image: aerialpic,
      description:
        "Our biggest efforts lie in creating mutually beneficial relationships at every level, including training and supporting the local dairy farmers who supply raw milk to our factory, mentoring and employing young Ugandans and facilitating their growth into industry professionals, empowering the economy by introducing superior technology, and improving the quality of life in Uganda and neighbouring regions by providing first-class yet pocket-friendly products.",
    },
    {
      title: "Animal Rearing",
      image: dairypic,
      description:
        "We are committed to producing the highest quality beef. Everything we do is focused on the wellbeing and welfare of our animals and controlling the impact on the environment. Our relaxed cattle have fresh food as required with a nutritious menu..",
    },
    {
      title: "Large Scale Farming",
      image: largscale,
      description:
        "Throughout Tomosi's Farm history, the family have worked long and hard, gathering a wealth of farming knowledge. Traditional practices have played an important role in maintaining a sustainable production system long before the days of modern farm machinery. We have onboarded modern farming methods since and this has improved our general farm output tremendously..",
    },
  ];
  return (
    <div className="py-5" id="what-we-do">
      <div className="container mt-5 pb-5">
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
                <div className={clsx(index % 2 ===0 ? "ps-5" : "pe-5", "py-5")}>
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
