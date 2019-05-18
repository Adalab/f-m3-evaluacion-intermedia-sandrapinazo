import React from "react";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types";
import "../styles/PokeList.scss";

class PokeList extends React.Component {
  render() {
    return (
      <ul className="PokemonUl">
        {this.props.data.map(item => {
          return (
            <li key={item.id}>
              <Pokemon name={item.name} url={item.url} types={item.types} />
            </li>
          );
        })}
      </ul>
    );
  }
}

PokeList.protoTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      types: PropTypes.arrayOf(PropTypes.string),
      url: PropTypes.string
    })
  ).isRequired
};

export default PokeList;
