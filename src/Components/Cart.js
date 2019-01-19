import React, { Component } from 'react'


class Cart extends Component {

cartStyle=()=>{
  return{
  background: '#f4f4f4',
  borderBottom: '1px #ccc dotted'
}
}

render() {
  return(

  <div style={this.cartStyle()}>Cart</div>
  )
}
}

export default Cart
