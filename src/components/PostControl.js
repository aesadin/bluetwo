import React from 'react';
import AddPostForm from "./AddPostForm";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import PostEdit from "./PostEdit";

class PostControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterPostList: [],
      selectedPost: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedPost: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleAddingNewPostToList = (newPost) => {
    const newMasterPostList = this.state.masterPostList.concat(newPost);
    this.setState({
      masterPostList: newMasterPostList,
      formVisibleOnPage: false,
    });
  };

  handleEditingPostInList = (postToEdit) => {
    const editedMasterPostList = this.state.masterPostList
      .filter((post) => post.id !== this.state.selectedPost.id)
      .concat(postToEdit);
    this.setState({
      masterPostList: editedMasterPostList,
      editing: false,
      selectedPost: null,
    });
  };
  
  handleDeletingPost = (id) => {
    const newMasterPostList = this.state.masterPostList.filter(
      (post) => post.id !== id
    );
    this.setState({
      masterPostList: newMasterPostList,
      selectedPost: null,
    });
  };
  
  handleChangingSelectedPost = (id) => {
    const selectedPost = this.state.masterPostList.filter(
      (post) => post.id === id
    )[0];
    this.setState({ selectedPost: selectedPost });
  };

  handleChangingSelectedUpvote = (id) => {
    const selectedPost = this.state.masterPostList.filter(
      (post) => post.id === id
    )[0];
    // selectedPost.vote += 1; Solution 2 not functional programming
    const incrementedPost = Object.assign({}, selectedPost, {vote: selectedPost.vote + 1});
    // const incrementedPost2 = { ...selectedPost, vote: selectedPost.vote + 1}; Solution 3 spread operator
    const editedMasterPostList = this.state.masterPostList
      .filter(post => post.id !== id)
      .concat(incrementedPost);
    this.setState({
      masterPostList: editedMasterPostList,
    })
  };

  handleChangingSelectedDownvote = (id) => {
    const selectedPost = this.state.masterPostList.filter(
      (post) => post.id === id
    )[0];
    if (selectedPost.vote > 0) {
      const decrementedPost = Object.assign({}, selectedPost, {vote: selectedPost.vote - 1})
      const editedMasterPostList = this.state.masterPostList
        .filter(post => post.id !== id)
        .concat(decrementedPost);
      this.setState({
      masterPostList: editedMasterPostList,
    })
  } 
};



render (){
  let currentlyVisibleState = null;
  let buttonText = null;

  if (this.state.editing){
    currentlyVisibleState = <PostEdit post={this.state.selectedPost} onEditPost={this.handleEditingPostInList} />
    buttonText = "Return to Posts";
  } else if (this.state.selectedPost != null){
    currentlyVisibleState = <PostDetail post={this.state.selectedPost} onClickingDelete={this.handleDeletingPost}
    onClickingEdit={this.handleEditClick} />
    buttonText = "Return to Posts";
  } else if (this.state.formVisibleOnPage) {
    currentlyVisibleState = <AddPostForm onNewPostCreation={this.handleAddingNewPostToList} />
    buttonText = "Return to Posts";
  } else {
    currentlyVisibleState = <PostList postList={this.state.masterPostList} onPostSelection={this.handleChangingSelectedPost} onUpvoteSelection={this.handleChangingSelectedUpvote} onDownvoteSelection={this.handleChangingSelectedDownvote}/>
    buttonText = "Add Post";
  }
  
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }  
}

export default PostControl;