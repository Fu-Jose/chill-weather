import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;
class Icons extends React.Component {
  render() {
    return <div>CNN</div>;
  }
}

export default connect(mapStateToProps)(Icons);
