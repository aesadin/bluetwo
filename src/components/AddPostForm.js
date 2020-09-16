import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function AddPostForm(props){
  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({ title: event.target.title.value, author: event.target.author.value, body: event.target.body.value, id: v4(), date: event.target.date.value, picture: event.target.picture.value, vote: 0 })
  }


return (
<React.Fragment>
  <ReusableForm
  formSubmissionHandler={handleNewPostFormSubmission}
  buttonText="post your post, post-haste"
  />
</React.Fragment>
  );
}

AddPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default AddPostForm;