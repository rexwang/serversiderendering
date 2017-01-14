import React, { Component } from 'react';

export default class extends Component {
  render() {
    console.log(this.props.state);
    return (
      <div>
        <h1>Hello world {this.props.state}</h1>
      </div>
    );
  }
}