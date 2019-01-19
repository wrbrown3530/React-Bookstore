import React from 'react'


function CartHeader(){
 return(
   <header style={headerStyle}>
     <h1>Shopping Cart</h1>
   </header>
 )
}

const headerStyle ={
  background: "#333",
  color: 'orange',
  textAlign: 'center',
  padding: '10px'
}



export default CartHeader
