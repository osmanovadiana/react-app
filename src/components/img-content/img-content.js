import React, { Component } from 'react';

import Modal from '../modal-window';
import './img-content.css';


export default class ImgContent extends Component {
   state = {
    showModal: 0
  };


  getModal = value => {
    this.setState({ showModal: value });
  };

  hideModal = value => {
    this.setState({ showModal: 0 });
  };


  render() {

    return (
      <div className="img-content">
        {this.props.data.map((data, key) => (
          <div key={key} className="small">
           

            <button onClick={() => this.getModal(data.id)} className="btn"> <img src={data.src} alt="" /></button>

            <Modal
              show={this.state.showModal === data.id}
              onHide={() => this.hideModal(data.id)}
              src={data.src}
            />
          </div>
        ))}
      </div>

    )
  }
  
}
