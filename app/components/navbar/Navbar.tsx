"use client";

import dynamic from "next/dynamic";
const NavItems = dynamic(() => import("./NavItems"), {
  ssr: false,
  loading: () => <p>Loading Nav ....</p>,
});

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        padding: "15px 0",
        position: "fixed",
        zIndex: "10",
        width: "100%",
        background: "white",
      }}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          eStartup
        </a>
        <NavItems />
      </div>
    </nav>
  );
};

export default Navbar;
