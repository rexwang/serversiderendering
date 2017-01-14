import React, { Component } from 'react';

export default class extends Component {
  render() {
    const { isMobile } = this.props;

    return (
      <div>
        <h1>Hello world {isMobile ? 'mobile' : 'desktop'}</h1>
      </div>
    );
  }
}