import React from 'react';

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
            <li className={`Pokemon-${this.state.selected}`} onClick={this.clickHandler}>
               <img src={this.props.url} alt={this.props.name}></img> 
               <h2 className='Name'>{this.props.name}</h2>
               {this.props.types.map(item=>{
                   return(
                       <span className='Type'>{item}</span>
                   );
               })}
               
            </li>
        );
    }
}

export default Pokemon;