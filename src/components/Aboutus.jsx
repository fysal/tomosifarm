import React from "react";

const Aboutus = () => {
  const keyreasons = [
    `Africa, by the turn of the century, will have an estimated 40% of the global population (UN figures) with a middle class 
    of well over 1billion people. These will need better protein and organic foods. Uganda in particular has 78% of her population under 30. When these come into a full consumption age, there will be a huge need for food and shelter. We would like to be part of this revolution by providing high quality dairy and beef products to this market. There is a lot of future revenues that can be tapped for many decades to come but currently hidden in these population numbers.`,
    `To increase the incomes of African nations, the leadership in Africa will require investment in skills and knowledge 
    in the agriculture sector. This sector contributes a lion’s share of the GDP of many African nations. Our years with dairy
     farming have taught us that unless there is deep collaboration between the producer, the trader and the processor, a lot of value is lost and the productivity chain gets stunted causing poverty eradication effort to stall. Our farm would like to be the regional leader in helping improve the productivity of farmers and setting an example for the African elite who currently think agriculture is a risky venture.`,
  ];
  return (
    <div className="grey_bg py-5">
      <div className="container">
        <h1 className="pt-5">About us</h1>
        <div className="content">
          The farm begun in 1964 as a small peasant holding for the first
          generation owners. Mr. & Mrs. Tomosi Rwabwogo were the early converts
          of the East African Christian revival movement in 1945. Their
          experience taught them to stop nomadism and improve their land,
          produce crops and animals for their local market. Beginning in 1997,
          this holding was expanded with several purchases from the second
          generation owners-Patience and Odrek Rwabwogo from the original 76
          acres to a current 500acres.
        </div>

        <h2 className="pt-5 pb-3">
          Our investment in Agriculture is driven by the following key reasons:
        </h2>

        <div className="">
          <div className="row">
            {keyreasons.map((reason, index) => (
              <div className="col-sm-12 col-md-6 small" key={index}>
                {index + 1} {reason}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
