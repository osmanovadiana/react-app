import React from 'react';
import PostListItem from '../post-list-item';


import './post-list.css';

const PostList = ({posts}) => {

  const elements = posts.map((item) => {
    const {id, ...itemProps} = item;

    return (
      <div className = "list-item" >
      <li 
      key = {
        id
      } >
        <PostListItem className="post-list-item"
 
        {...itemProps}

        ></PostListItem>
      </li>


      </div>

    )
  });

  return (
    <ul className="img-list">
      {elements}
    </ul>
  )
}

export default PostList;