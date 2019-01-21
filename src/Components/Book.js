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

    click = (title) => {
    this.props.addBookToCart(title)
  }


  render() {
   //state here = this.props.books
   const {  title , author, price }= this.props.book
   return  (
   <div style={this.getStyle()}>
      <p>
          <li><b>Title:</b> {title}</li>
          <li><b>Author:</b> {author}</li>
          <li><b>Price:</b> ${price}</li>
          <button style={btnStyle} type='button'  value={title} onClick={(e) => this.click(e.target.value)} >Add to cart</button>
      </p>
   </div>
   )
  }
}

//PropTypes
Book.propTypes = {
  book: PropTypes.object.isRequired
}

let btnStyle = {
  color: "orange",
  padding: '7px 10px',
  cursor: 'pointer'
}



export default Book;
