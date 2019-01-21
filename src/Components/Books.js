import React, { Component } from 'react'
import Book from './Book'


class Books extends Component {


  render() {
   return this.props.books.map((book)=>(
    <Book key={book.id} book={book} addBookToCart={this.props.addBookToCart}/>
   ))
  }
}



export default Books;
