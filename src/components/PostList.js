import React from 'react';
import Post from './Post';
import PropTypes from "prop-types";

function PostList(props){
  return(
    <React.Fragment>
    <hr/>
    {Object.values(props.postList).map((post) => 
      <Post
        whenPostClicked = { props.onPostSelection }
        whenUpvoteClicked = {props.onUpvoteSelection}
        whenDownvoteClicked = {props.onDownvoteSelection}
        title={post.title}
        author={post.author}
        body={post.body}
        date={post.date}
        picture={post.picture}
        id={post.id}
        vote={post.vote}
        key={post.id}/>
    ).sort((a, b) => (b.props.vote - a.props.vote))}
    
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func,
  onUpvoteSelection: PropTypes.func,
  onDownvoteSelection: PropTypes.func,
}


export default PostList;


