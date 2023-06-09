import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({columns , sortColumn , onSort , data, onLike , onDelete}) => {

  return (
    <table className="table mt-4">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
      <TableBody
        data={data}
        onLike={onLike}
        onDelete={onDelete}
        columns={columns}
      />
    </table>
  );
};

export default Table;
