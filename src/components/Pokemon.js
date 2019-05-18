import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Pokemon.scss';

class Pokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            selected : 'noSelected',
        }
       //this.handleClick = this.handleClick.bind(this);
    }
    // clickHandler (event) {
    //     this.setState({selected: 'selected'})
    // } 
    render() {
        return(
            <div className={`Pokemon-${this.state.selected}`} onClick={this.clickHandler}>
               <img src={this.props.url} alt={this.props.name}/>
               <h2 className='Name'>{this.props.name}</h2>
               <ul className='ListType'>
               {this.props.types.map((item, index)=>{
                   return(
                       <li className='Type' key={index}>{item}</li>
                   );
               })}
               </ul>
            </div>
        );
    }
}

Pokemon.propTypes={
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    types: PropTypes.array,
};

export default Pokemon;