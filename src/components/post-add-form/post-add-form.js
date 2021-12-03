import React, { Component } from 'react';
import './post-add-form.css'


export default class PostAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      text: '',
      date: ''
    }
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onValueChangeName = this.onValueChangeName.bind(this);

  }

  onValueChange(e) {
    this.setState({
      text: e.target.value,
    })
  }

   onValueChangeName(e) {
     this.setState({
       name: e.target.value
     })
   }


  

  onSubmit(e) {
    e.preventDefault();

    this.props.onAddName(this.state.name);
    this.props.onAdd(this.state.text);
    this.setState({

      text: '',
      name: '',
    });
  }

  

  render() {

    return (
      <form
        onSubmit={this.onSubmit}     
        
      >
        <input
          type="text"
          placeholder="Ваше имя"
          className="form-input"
          onChange={this.onValueChangeName}
          value={this.state.name}
        ></input>
        <input
          type="text"
          placeholder="Ваш комментарий"
          onChange={this.onValueChange}
          className="form-input"
          value={this.state.text}
        ></input>
    
        <button
          type="submit"
          className="add-btn"
        >Оставить комментарий</button>
      
      </form>
    )
  }
  
}

