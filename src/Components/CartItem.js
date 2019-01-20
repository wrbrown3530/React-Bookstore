import React, { Component } from 'react';

class CartItem extends Component {

  render() {
    return (
        <div className="collection-item list-group-item .d-inline-block">
          <div className="row justify-content ">
            <div className="col-md-6"><p>Eloquent JavaScript, Second Edition</p></div>
            <div className="col-md-4"><p>$69.69</p></div>
            <div className="col-md-2 "><button style={btnStyle}> X </button></div>
          </div>
        </div>
           )
  }

}

const btnStyle ={
background: '#ff0000',
color: '#fff',
border: 'none',
padding: '5px 8px',
borderRadius: '40%',
cursor: 'pointer',
float: 'right'
}


export default CartItem;
