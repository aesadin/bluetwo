import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return (
    <React.Fragment>
      <div onClick={() => props.whenPostClicked(props.id)}>
        <h3>{props.title}</h3>
        <p>Posted by {props.author} on {props.date}</p>
      </div>
      <button onClick={() => props.whenUpvoteClicked(props.id)}>Upvote</button>
      <p>{props.vote}</p>
      <button onClick={() => props.whenDownvoteClicked(props.id)}>Downvote</button>
      <hr />
    </React.Fragment>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  picture: PropTypes.string,
  vote: PropTypes.number,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func,
  whenUpvoteClicked: PropTypes.func,
  whenDownvoteClicked: PropTypes.func,
};

export default Post;