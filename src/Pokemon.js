import React from 'react';

class Pokemon extends React.Component {
    render() {
        return(
            <li>
               <img src={this.props.url}></img> 
               <h2>{this.props.name}</h2>
               {this.props.types.map(item=>{
                   return(
                       <span>{item}</span>
                   );
               })}
               
            </li>
        );
    }
}

export default Pokemon;