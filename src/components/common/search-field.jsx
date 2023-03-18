import React, { Component } from "react";

const SearchBox = ({value , onChange}) => {
  return (
    <input
      className="form-control mt-3 w-75"
      name="query"
      type="text"
      placeholder="Search..."
      value={value}
      onChange={e => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
