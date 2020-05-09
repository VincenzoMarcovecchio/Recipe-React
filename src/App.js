import React, { Component } from 'react';
import Form from './components/Form';
import './App.css';
import Recipe from './components/Recipe';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
class App extends Component {
  state = {
    recipes: [],
  };

  getrecipe = async (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const api_call = await fetch(
      `https://api.edamam.com/search?q=${recipeName}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY_ID}`
    );
    const data = await api_call.json();
    this.setState({ recipes: data.hits });
  };

  componentDidMount = () => {
    const json = localStorage.getItem('recipes');
    const recipes = JSON.parse(json);
    this.setState({ recipes: recipes });
  };

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem('recipes', recipes);
  };

  render() {
    return (
      <div className='App'>
        <AppBar />
        <div className='conta'>
          <Form getrecipe={this.getrecipe} />
          <Recipe data={this.state.recipes} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
