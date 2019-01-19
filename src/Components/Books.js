import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class Books extends Component {

  addBookToCart=(e)=>{
    console.log(this.props)
  }

  render() {
   //state here = this.props.books
   return this.props.books.map((book)=>(
    <Book key={book.id} book={book} addBookToCart={this.props.addBookToCart}/>
   ))
  }
}

//Proptypes
Books.propTypes = {
  books: PropTypes.array.isRequired
}

export default Books;
