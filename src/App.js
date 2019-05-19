import React from "react";
import PokeList from "./components/PokeList";
import { pokemon } from "./components/PokemonsArray";
import "./App.css";

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      pokemons: pokemon,
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler (event) {
    const index = event.currentTarget.getAttribute('data-index');
    const pokemon = this.state.pokemons[index];
    pokemon.isFavorite==='Favorite'? pokemon.isFavorite= '': pokemon.isFavorite= 'Favorite';
    let allpokemons = this.state.pokemons;
    allpokemons.splice(index,1,pokemon);
    this.setState({
      pokemons: allpokemons, 
    });
  }

  render () {
    return (
      <div className="App">
        <h1>Mi lista de pokemon</h1>
        <PokeList data={this.state.pokemons} selector={this.clickHandler}/>
      </div>
    );
  }
}

export default App;