import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Books from './Components/Books'
import Cart from './Components/Cart'
import SearchBook from './Components/SearchBook'
import CartHeader from './Components/CartHeader'
import About from './Components/Pages/About'

class App extends Component {
  state = {
    books: [],
    cart: [],
    total: [0]
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books')
    const json = await response.json()
    this.setState({books: json})
  }


  addBookToCart = (title) => {
      let cartBook = this.state.books.find(book => book.title === title)
        this.setState({ cart: [...this.state.cart, cartBook], total: [...this.state.total, cartBook.price]})
      }



  searchBook = (title) => {
   this.setState({
     books: this.state.books.filter(book =>{
       let filtered = book.title.includes(title) || book.author.includes(title)
       return filtered
     })
   })
 }

  render() {
    return (<Router>
      <div className="App">
        <div className="container">
          <Header/>
          <Route exact path="/" render={props => (<React.Fragment>
              <SearchBook searchBook={this.searchBook}/>
              <div className="row">
                <div className="col-md-8">
                  <Books books={this.state.books} addBookToCart={this.addBookToCart}/>
                </div>
                <div className="col-md-4">
                  <CartHeader/>
                  <Cart cart={this.state.cart} books={this.state.books} addBookToCart={this.addBookToCart} total={this.state.total}/>
                </div>
              </div>
            </React.Fragment>)}/>
          <Route path="/about" component={About}/>
          <Footer/>
        </div>
      </div>
    </Router>);
  }
}

export default App;
