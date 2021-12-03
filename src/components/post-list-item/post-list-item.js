import React, {Component} from 'react';
import './post-list-item.css'

export default class PostListItem extends Component {
  render() {
    const {name, label} = this.props;

    return (
      <div >
        <div className="list-item__name">
          <span>{name}</span>
          
        </div>
        <div className="list-item-label">
          
          {label}
        </div>
      </div>
    )
  }
}

