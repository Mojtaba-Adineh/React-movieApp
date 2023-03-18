import React, { Component } from "react";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";
import Like from "./common/like";
import { Button } from "bootstrap";
import Table from "./common/table";
import { Link } from "react-router-dom";


class MoviesTable extends Component {
  columns = [
    { label: "Title", path: "title" , 
      content : movie => <Link className="movieLinks" to={`/movies/${movie._id}`}>{movie.title}</Link>  },
    { label: "Genre", path: "genre.name" },
    { label: "Stock", path: "numberInStock" },
    { label: "Rate", path: "dailyRentalRate" },
    { 
      key: "Like",
      content: (movie) => (
        <Like liked={movie.liked} onLike={() => this.props.onLike(movie)} />
      ),
    },
    {
      key: "Delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-md"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, onLike, onDelete, onSort, sortColumn } = this.props;

    return (
      <Table
      data = {movies}
      onLike = {onLike}
      onDelete = {onDelete}
      onSort = {onSort}
      sortColumn = {sortColumn}
      columns = {this.columns}
      />
    );
  }
}

export default MoviesTable;
