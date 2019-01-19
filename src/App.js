import React, {Component} from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom'
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
    books: []

  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books')
    const json = await response.json()
    this.setState({ books: json })
  }

  addBookToCart = (id) => {
    this.setState({
      books: this.state.books.map(book => {
        if (book.id === id) {
          book.inCart = true
        }
        return book
      })
    })
  }

  //Add Book
  searchBook=(title)=>{

  }

  render() {
    return (
   <Router>
    <div className="App">
      <div className="container">
        <Header/>
        <Route exact path="/" render={props=>(
          <React.Fragment>

            <SearchBook searchBook={this.searchBook}/>
            <div className="row">
              <div className="col-md-8">
                <Books books={this.state.books} addBookToCart={this.addBookToCart}/>
              </div>
              <div className="col-md-4">
              <CartHeader />
              <Cart />
              </div>
            </div>
          </React.Fragment>
        )} />
        <Route path="/about" component={About} />
        <Footer/>
      </div>
    </div>
  </Router>
  );
  }
}

export default App;
