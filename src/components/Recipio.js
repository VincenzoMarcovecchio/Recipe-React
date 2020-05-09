import React, { Component } from 'react';
import ListIngredients from './ListIngredients';
import Button from '@material-ui/core/Button';
import AppBar from './AppBar';
import { Link } from 'react-router-dom';
import Footer from './Footer';
class Recipio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRecipio: [],
    };
  }

  title = this.props.location.state;

  componentDidMount = async () => {
    const req = await fetch(
      `https://api.edamam.com/search?q=${this.title}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY_ID}`
    );

    const res = await req.json();
    this.setState({ activeRecipio: res.hits[0] });
  };

  render() {
    if (this.state.activeRecipio.length === 0) return null;

    const myboy = this.state.activeRecipio;
    console.log(myboy);
    return (
      <>
        <AppBar />
        <div className='modal'>
          <div className='innerModal'>
            <br />
            <Button
              style={{ marginRight: 'auto', padding: '1.5rem' }}
              component={Link}
              to={{
                pathname: '/',
              }}
              size='small'
              color='primary'
            >
              Back
            </Button>
            <img src={myboy.recipe.image} alt={myboy.recipe.label} />
            <h1>{myboy.recipe.label}</h1>
            <br />
            <em>
              <strong>{Math.ceil(myboy.recipe.calories)} Kcal</strong>
            </em>
            <br />
            <div className='text-left'>
              <strong>Ingredients:</strong>
              <br />
              <br />

              <ListIngredients items={myboy.recipe.ingredients} />
            </div>
            <br />
            <div className='approx'>
              <Button
                component={Link}
                to={{
                  pathname: '/',
                }}
                size='small'
                color='primary'
              >
                Back
              </Button>
              <h3>Time needed aprox:</h3>
              <h4>{myboy.recipe.totalTime} minutes 🥰</h4>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Recipio;
