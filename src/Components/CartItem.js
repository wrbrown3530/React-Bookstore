import React, { Component } from 'react';

class CartItem extends Component {

  click = () => {
  this.props.clearCart()
}

  render() {
    return (
        <div className="collection-item list-group-item .d-inline-block">
          <div className="row justify-content ">
            <div className="col-md-8">{this.props.cart.map((book,i)=><p key={i}>{book.title}, ${book.price}</p>)}</div>
          </div>
        </div>
           )
  }

}




export default CartItem;
