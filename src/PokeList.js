import React from "react";
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  render() {
    return (
      <ul className='PokemonUl'>
        {this.props.data.map(item => {
            return (
            <Pokemon 
            name={item.name}
            url={item.url}
            types={item.types}
            />
          );
        })}
      </ul>
    );
  }
}

export default PokeList;
