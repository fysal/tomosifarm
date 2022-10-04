import React from "react";

const Contactus = () => {
  const contactItems = [
    {
      icon: "email",
      title: "Chat to experts",
      text: "Speak to our friendly team",
      contact: "info@tomosigroup.ug",
    },
    {
      icon: "phone",
      title: "Call us",
      text: "Mon-Fri from 8am to 5pm",
      contact: "+(256) 414 220 702 / 750 981 360", 
    },
    {
      icon: "map",
      title: "Visit us",
      text: "Visit our office HQ",
      contact: "Plot 37/41, Luzira Portbell, Kampala, Uganda",
    },
  ];

  return (
    <div className="grey_bg py-5" id="contact-us">
      <div className="container py-4">
        <h1 className="mb-5"> Contact Us</h1>

        <div className="content pb-5">
          <div className="row">
            {contactItems.map((item, index) => (
              <div className="col-sm-12 col-md-4 mb-3" key={index}>
                <div className="bg-white rounded p-4">
                  <span className="material-icons-outlined p-3 rounded text-white bg-primary">
                    {item.icon}
                  </span>
                  <div className="fw-bold  mt-3">{item.title}</div>
                  <div className=" text-muted mt-2">{item.text}</div>
                  <div className="small text-muted fw-bold mt-3">{item.contact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
