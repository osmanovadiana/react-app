import React, { Component } from 'react';
import ReactDOM from "react-dom";
import AppHeader from '../app-header';
import ImgContent from '../img-content';
import Modal from '../modal-window'
import one from './images/photo1.png';
import two from './images/photo2.png';
import three from './images/photo3.png';

import './app.css';




export default class App extends Component{
  state = {
    post: [
      { id: 1, src: one },
      { id: 2, src: two },
      { id: 3, src: three}
    ]
  };
  
  render() {
    return (
      <div className="container">
        <AppHeader></AppHeader>
        <ImgContent data={this.state.post} ></ImgContent>
        <Modal data={this.state.post} ></Modal>
      </div>
    ) 
  }
  
}

