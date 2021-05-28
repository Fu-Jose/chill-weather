import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { searchAction } from "../actions/search";
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  searchAction: (searchInput) => dispatch(searchAction(searchInput)),
});

class Search extends React.Component {
  state = {
    searchInput: "",
    results: [],
  };
  //   handleChange = (e) => {
  //     const { searchInput } = e.target;
  //     this.setState({ searchInput: value });
  //   };
  handleSubmit = async (e) => {
    e.preventDefault();
    const { searchInput } = this.state;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput}&appid=b4922a3466e3a6cac79a0e4d6a86337b`
    );

    // if (!response.ok) this.props.displayMessage("ERROR");

    const results = await response.json();

    this.setState({ results });
    console.log(results);
    console.log(this.state.results);
  };
  render() {
    return (
      <InputGroup className="mx-auto">
        <FormControl
          placeholder="City"
          aria-label="City"
          aria-describedby="basic-addon1"
          onChange={(event) =>
            this.setState({
              searchInput: event.currentTarget.value,
            })
          }
          onSubmit={this.handleSubmit}
        />
        <button
          className="btn btn-outline-secondary btn-sm"
          type="button"
          id="button-addon1"
          onClick={this.handleSubmit}
        >
          GO
        </button>
      </InputGroup>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
