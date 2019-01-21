import React, {Component} from 'react'
import CartItem from './CartItem';

class Cart extends Component {

  render() {

    return (
      <div>
        <CartItem cart={this.props.cart} book={this.props.books} addBookToCart={this.props.addBookToCart} />
        <div>Total:${(this.props.total).reduce((acc, cv) => acc + cv).toFixed(2)}</div>
        </div>
      )
  }

}



export default Cart
