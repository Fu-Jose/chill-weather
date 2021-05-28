import React from "react";
import Search from "../components/Search";
import Icons from "../components/Icons";
const MainPage = () => {
  return (
    <div className="container">
      <Icons></Icons>
      <div>Welcome to chill weather</div>
      <Search></Search>
    </div>
  );
};

export default MainPage;
