import React from "react";

function Navbar() {
  return (
    <div className="container mx-auto px-4 lg:w-[68rem] flex justify-between items-center p-4  ">
      <div>Logo</div>
      <div className="w-1/4">
        <ul className="lg:flex justify-between hidden">
          <li>Home</li>
          <li>Contact</li>
          <li>Project</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
