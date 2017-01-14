import React, { Component } from 'react';

export default class extends Component {
  render() {
    return (
      <div>
        <h1>Hello world {this.props.state}</h1>
      </div>
    );
  }
}