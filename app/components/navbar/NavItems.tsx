"use client";
import React, { useCallback, useEffect, useState } from "react";
import style from "../../css/project.module.css";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "features", label: "Features" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" },
];

const NavItems = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        const offsetTop = element.offsetTop - 100;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section.id);
        }
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav  mb-2 mb-lg-0">
          {sections.map((section) => (
            <li className="nav-item" key={section.id}>
              <a
                href={`#${section.id}`}
                className={`nav-link ${
                  activeSection === section.id ? style.activeItem : ""
                }`}
                onClick={() => scrollToSection(section.id)}
                style={{ cursor: "pointer" }}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavItems;
