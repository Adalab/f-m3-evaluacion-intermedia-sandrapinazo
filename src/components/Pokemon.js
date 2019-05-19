import React from "react";
import PropTypes from "prop-types";
import "../styles/Pokemon.scss";

class Pokemon extends React.Component {
  render() {
      const {name, types, url, isFavorite}=this.props.data;
    return (
      <div
        className={`Pokemon ${isFavorite}`}
        data-index={this.props.index}
        onClick={this.props.selector}
      >
        <img src={url} alt={name} />
        <h2 className="Name">{name}</h2>
        <ul className="ListType">
          {types.map((item, index) => {
            return (
              <li className="Type" key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

Pokemon.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    isFavorite: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.string),
    url: PropTypes.string
  }).isRequired,
  index: PropTypes.number,
  selector: PropTypes.func.isRequired,
};

export default Pokemon;
