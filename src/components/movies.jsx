import React, { Component } from "react";
import MoviesTable from "./moviesTable";
import { deleteMovie, getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/list-group";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";
import { Route , Routes ,Link } from "react-router-dom";
import MovieForm from './movieForm';
import SearchBox from './common/search-field';

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: null,
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];

    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movieToRemove) => {
    const movies = this.state.movies.filter(
      (movie) => movie._id !== movieToRemove._id
    );
    deleteMovie(movieToRemove._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre,searchQuery : "" , currentPage: 1 });
  };

  handleSearch = query => {
    this.setState({searchQuery : query , selectedGenre : null , currentPage : 1})
  }

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      selectedGenre,
      sortColumn,
      searchQuery
    } = this.state;

    let filteredMovies = allMovies;
    if(searchQuery)
      filteredMovies = allMovies.filter(m => 
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if(selectedGenre && selectedGenre._id)
      filteredMovies = allMovies.filter(m => m.genre._id === selectedGenre._id);
    

    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );

    const movies = paginate(sortedMovies, currentPage, pageSize);

    return { totalCount: filteredMovies.length, data: movies };
  };

  render() {
    const { pageSize, currentPage, selectedGenre, sortColumn, searchQuery } = this.state;

    const { totalCount, data: movies } = this.getPageData();

    if (totalCount === 0)
      return (
        <p className="fs-4 bg-black text-warning d-inline-block rounded-3 p-2 m-5">
          There is no movies in database
        </p>
      );
    return (
      <React.Fragment>
        <div className="d-flex justify-content-center">
          <ListGroup
            items={this.state.genres}
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
          <div className="my-5 fs-5 w-50">
            <div>
              <p className="fs-5 d-inline p-2 ">
                Showing {totalCount} movies in database
              </p>
              <Link to={"/movies/new"}><button className="btn btn-primary ms-5">New Movie</button></Link>
              <Routes>
                <Route path="/movies/new" element={<MovieForm />}/>
              </Routes>
            </div>
            <SearchBox value={searchQuery} onChange={this.handleSearch}/>
            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onDelete={this.handleDelete}
              onLike={this.handleLike}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
