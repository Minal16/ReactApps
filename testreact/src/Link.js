// import React from 'react';
// import { string } from 'prop-types';
// const Link = ({ title, url }) => <a href={url}>{title}</a>;
// Link.propTypes = {
//   title: string.isRequired,
//   url: string.isRequired
// };
// export default Link;


import React, { Component } from 'react';
import { string } from 'prop-types';
class Link extends Component {

constructor(props){
    super(props);
    this.state = {clicked:false}
    }

  handleClick= () => {  //arrow function ..dont need to bind with this
    alert('clicked');
    this.setState({clicked:true});

  };

  render() {
    const { title, url } = this.props;
    return <a href={url} onClick={this.handleClick}>{title}</a>;
  }
}

Link.propTypes = {
      title: string.isRequired,
      url: string.isRequired
    };
export default Link;