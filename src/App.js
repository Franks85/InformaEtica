import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Landing from './containers/Landing/Landing'
import Header from './components/Navigation/Header'
import Footer from './components/Navigation/footer'

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <Header />
            <main>
              <Route path="/" exact component={Landing} />
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
