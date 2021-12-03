import React, {Component} from 'react';
import './modal-window.css';

import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import one from './images/photo1.png';
import two from './images/photo2.png';
import three from './images/photo3.png';




export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [
        {name: 'Миша', label: 'Отличное фото', id: 1, },
        {name: 'Саша', label: 'Я тут был', id: 2, },
 
      ],
      post: [
        { id: 1, src: one },
        { id: 2, src: two },
        { id: 3, src: three}
      ]

    };
    this.addItem = this.addItem.bind(this);
    this.addItemName = this.addItemName.bind(this);
 
    this.maxId = 3;
  }

  addItem(body) {
    const newItem = {
      label: body,
      // name: body, 
      id: this.maxId++
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    });
  }

    addItemName(body) {
      const newItemName = {

        name: body,
        id: this.maxId++
      }
      this.setState(({
        data
      }) => {
        const newArr = [...data, newItemName];
        return {
          data: newArr
        }
      });
    }



  render() {
    console.log(this.props.show);
    return (
      <div  >
        <React.Fragment>
          {this.props.show && (
            <div  className = "modal" >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div>
                    <div className="img">{this.props.src}</div>
                  
                    <PostAddForm  onAddName={this.addItemName} onAdd={this.addItem}></PostAddForm>
                    <button onClick={this.props.onHide} className="close"></button>
                  </div>
                  <PostList posts={this.state.data} ></PostList>
                </div>
              </div>
            </div>
          )}
        </React.Fragment>

      </div>
    );
  }
}



