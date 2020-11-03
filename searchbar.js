import React from 'react'
import { Component } from "react"
import { moviesconv } from '.'

export const SearchBar = ({handleChange, className}) => (
  <input 
  type = "search"
  placeholder = "Search movies"
  onChange = {handleChange}
  className = {className}
  />
)