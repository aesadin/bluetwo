import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function PostEdit(props) {
  const { post } = props;
  function handleEditingPostInList(event) {
    event.preventDefault();
    props.onEditPost({
      title: event.target.title.value,
      author: event.target.author.value,
      body: event.target.body.value,
      date: event.target.date.value,
      picture: event.target.picture.value,
      vote: post.vote,
      id: post.id,
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditingPostInList}
        buttonText="Update Post"
        defaultTitle={post.title}
        defaultAuthor={post.author}
        defaultBody={post.body}
        defaultDate={post.date}
        defaultPicture={post.picture}
      />
    </React.Fragment>
  );
}

PostEdit.propTypes = {
  post: PropTypes.object,
  onEditPost: PropTypes.func,
};

export default PostEdit;