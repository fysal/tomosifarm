import React, { useRef, useState } from "react";
import Youtube from "react-youtube";

const Aboutus = () => {
   const [showVideoPlayer, setShowVideoPlayer] = useState(false);

  const myRef = useRef(null);
  const keyreasons = [
    `Africa, by the turn of the century, will have an estimated 40% of the global population (UN figures) with a middle class 
    of well over 1billion people. These will need better protein and organic foods. Uganda in particular has 78% of her population under 30. When these come into a full consumption age, there will be a huge need for food and shelter. We would like to be part of this revolution by providing high quality dairy and beef products to this market. There is a lot of future revenues that can be tapped for many decades to come but currently hidden in these population numbers.`,
    `To increase the incomes of African nations, the leadership in Africa will require investment in skills and knowledge 
    in the agriculture sector. This sector contributes a lion’s share of the GDP of many African nations. Our years with dairy
     farming have taught us that unless there is deep collaboration between the producer, the trader and the processor, a lot of value is lost and the productivity chain gets stunted causing poverty eradication effort to stall. Our farm would like to be the regional leader in helping improve the productivity of farmers and setting an example for the African elite who currently think agriculture is a risky venture.`,
  ];

  console.log(showVideoPlayer)
  return (
    <div className="grey_bg py-5" id="about-us" ref={myRef}>
      <div className="container">
        <h1 className="pt-5">About us</h1>
        <div className="content small">
          At Tomosi’s Farm Bwesharire, we began with increasing milk production
          and processing by working with and through a cooperative in 2007 and
          now we are venturing into beef and feed production. A technical
          school, a Dairy plant, a Feed mill and a Beef processing facility, all
          projects we are working on as a farm, will fundamentally transform
          Uganda’s agricultural sector and improve the economy of the
          communities we work in.
        </div>

        <h2 className="pt-5 pb-3">
          Our investment in Agriculture is driven by the following key reasons:
        </h2>

        <div className="">
          <div className="row">
            {keyreasons.map((reason, index) => (
              <div className="col-sm-12 col-md-6  small" key={index}>
                <span className="fct">{index + 1}</span> {reason}
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-5 ">
         {showVideoPlayer === true && <YoutubePopup setShowVideoPlayer={setShowVideoPlayer} />}
          <span className="btn btn-primary py-3 px-4" onClick={()=>setShowVideoPlayer(true)}>
            <span className="fw-bold ">Take a video tour</span>
          </span>
        </div> 
      </div>
    </div>
  );
};

export default Aboutus;

export const YoutubePopup = ({setShowVideoPlayer}) => {
    
     const videoString = "hJM6zoYENS8";

     const videoOptions = {
       height: "100%",
       width: "100%",
       playerVars: { autoplay: 1 },
     };
  return (
    <div className="vid_wrapper d-flex align-items-center justify-content-center">

      <div className="vidinner">
        <span className="material-icons-outlined _close_btn" onClick={()=>setShowVideoPlayer(false)}>close</span>
        <Youtube
          opts={videoOptions}
          onEnd={() => setShowVideoPlayer(false)}
          videoId={videoString}
          className="__fitVid"
        />
      </div>
    </div>
  );
};
