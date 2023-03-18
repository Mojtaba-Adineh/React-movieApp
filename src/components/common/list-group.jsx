import React, { Component } from "react";

const ListGroup = ({ items, textProperty, valueProperty, onItemSelect, selectedItem }) => {


  return (
    <ul className="list-group m-5 fs-5">
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={item === selectedItem ? "active list-group-item clickable" : "list-group-item clickable"}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
