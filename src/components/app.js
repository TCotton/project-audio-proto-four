import React, { Component } from 'react';
import Modal from './modal';
import GoodModal from './good_modal';

export default class App extends Component {
  render() {
    return (
      <div>
        React simple starter
        {this.props.children}
        <GoodModal />
      </div>
    );
  }
}
