import React, { useImperativeHandle } from "react";
import ReactDOM from "react-dom"
import { Component } from "react";
import { moviesconv } from "./index";
import "bootstrap/dist/css/bootstrap.css";
import { searchbar } from "./searchbar";
import './search-box.css';
import { getMovies } from "./services/fakeMovieService";
import {SearchBar} from './searchbar'

export class Moviestables extends Component {
 
constructor() {
  super();
  this.state = {
    searchfield:"",
  }
}

   render() {
     let searchFieldd = this.state.searchfield;
     let moviesconv2 = moviesconv;
     let filteredMovies = moviesconv2.filter(moviesca =>
      moviesca.title.toLowerCase().includes(searchFieldd.toLowerCase()))
      return (
        <div>
          <h1>Search movies</h1>
       <SearchBar
       handleChange = {e => this.setState({searchfield: e.target.value})}
       className = "search"
       />
       <table className="table">
       <thead>
         <tr>
           <th>#id</th>
           <th>Title</th>
           <th>Genre</th>
           <th>Stock</th>
         </tr>
       </thead>
       <tbody>
       {filteredMovies.map((filteredMovies) => (
           <tr key={filteredMovies._id}>
             <td>{filteredMovies.id}</td>
             <td>{filteredMovies.title}</td>
             <td>{filteredMovies.genre.name}</td>
             <td>{filteredMovies.numberInStock}</td>
             <td><button className = "btn">Select</button></td>
           </tr>
         ))}
       </tbody>
     </table>
        </div>
      )
     };
 }

