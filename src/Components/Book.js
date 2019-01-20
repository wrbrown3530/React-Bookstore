import React, { Component } from 'react'
import PropTypes from 'prop-types'

 export class Book extends Component {

   getStyle =()=>{
      return{
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        color: this.props.book.inCart ?
        'blue' : '#333'
      }
    }

    inputStyle=()=>{
      return{
        color: "orange",
        padding: '7px 10px',
      }
    }



addBookToCart=(e)=>{
  console.log(this.props)
}

  render() {
   //state here = this.props.books
   const { id , title , author, price }= this.props.book
   return  (
   <div style={this.getStyle()}>
      <p>
          <li><b>Title:</b> {title}</li>
          <li><b>Author:</b> {author}</li>
          <li><b>Price:</b> ${price}</li>
          <button style={this.inputStyle()} type="submit" onClick={this.props.addBookToCart.bind(this, id)}>Add To Cart</button> {' '}
      </p>
   </div>
   )
  }
}

//PropTypes
Book.propTypes = {
  book: PropTypes.object.isRequired
}



export default Book;
