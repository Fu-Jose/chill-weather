import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;
const DetailsPage = () => {
  return (
    <div className="container">
      <div>Details Page</div>
    </div>
  );
};

export default connect(mapStateToProps)(DetailsPage);
