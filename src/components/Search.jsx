import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const Search = (props) => {
  return (
    <>
      <InputGroup className="mx-auto">
        <FormControl
          placeholder="City"
          aria-label="City"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </>
  );
};

export default Search;
