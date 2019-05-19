import React from "react";
import Pokemon from "./Pokemon";
import PropTypes from "prop-types";
import "../styles/PokeList.scss";

class PokeList extends React.Component {
  render() {
    return (
      <ul className="PokemonUl">
        {this.props.data.map((item, index) => {
          return (
            <li key={item.id}>
              <Pokemon data={item} index={index} selector={this.props.selector}/>
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
      isFavorite: PropTypes.string,
      types: PropTypes.arrayOf(PropTypes.string),
      url: PropTypes.string
    })
  ).isRequired,
  selector: PropTypes.func.isRequired,
};

export default PokeList;
