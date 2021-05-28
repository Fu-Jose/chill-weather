import React from "react";
import Search from "../components/Search";
import Icons from "../components/Icons";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const MainPage = () => {
  return (
    <div className="container">
      <Icons></Icons>
      <div>Welcome to chill weather</div>
      <Search></Search>
    </div>
  );
};

export default connect(mapStateToProps)(MainPage);
