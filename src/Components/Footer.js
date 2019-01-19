import React from 'react'


function Footer(){
 return(
   <footer style={footerStyle}>
     <h5>By Will Brown</h5>
   </footer>
 )
}

const footerStyle={
  background: "orange",
  color: '#333',
  textAlign: 'left',
  padding: '10px'
}

export default Footer
