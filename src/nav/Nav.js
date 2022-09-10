import React, { useEffect, useState } from "react";
import Logo from "../assets/logo/logo.jpg";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
const Nav = () => {
  const location = useLocation();
  const links = [
    { name: "home", link: "" },
    { name: "about us", link: "about-us" },
    { name: "what we do", link: "what-we-do" },
    // { name: "news", link: "news" },
    { name: "contact us", link: "contact-us" },
  ];
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.hash);
  }, [location]);

  function scrollToDiv(e) {
    console.log(e.target.textContent);
    if (e.target.textContent === "home") window.scrollTo(0, 0);
    else {
      const box = document.getElementById(e.target.getAttribute("data"));
      box.scrollIntoView();
      window.scrollBy(0,100)
    }
  }
  document.addEventListener("scroll", () => {
    if (window.scrollY > 0)
      document.querySelector(".navbar").classList.add("fixed-top");
    else document.querySelector(".navbar").classList.remove("fixed-top");
  });

  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={Logo} width="80" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {links.map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  className={clsx(
                    "nav-link text-capitalize",
                    activeLink === `#${item.link}` && "active"
                  )}
                  aria-current="page"
                  href={`#${item.link}`}
                  data={item.link}
                  onClick={scrollToDiv}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
