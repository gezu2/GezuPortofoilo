import React from "react";
import SidenavTitle from "./SidenavTitle";

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <ul>
        <li className="sidenavLi">Portfolio Page</li>
      </ul>
      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
        <li className="sidenavLi">Web Development</li>
        <li className="sidenavLi">Portfolio Websites</li>
        <li className="sidenavLi">Backend Setup</li>
        <li className="sidenavLi">Amazon Clone</li>
      </ul>
      <SidenavTitle title="L" subTitle="atest Posts" />
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi">+251 920305837</li>
        <li className="sidenavLi">gezu.gudisa@gmail.com</li>
      </ul>
    </div>
  );
};

export default Sidenav;
