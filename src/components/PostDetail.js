import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Figure from "react-bootstrap/Figure";

function PostDetail(props) {
  const { post, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>{post.title}</h1>
      <h3>{post.author}</h3>
      <p>
        <em>{post.date}</em>
      </p>
      <p>
        <Figure>
          <Figure.Image width={250} height={250} src={post.picture} />
          <Figure.Caption>
            <em>{post.title}</em>
          </Figure.Caption>
        </Figure>
      </p>
      <p>
        {post.body}
      </p>
      <Button
        style={{ margin: 10 }}
        variant="success"
        onClick={props.onClickingEdit}
      >
        Update Post
      </Button>
      <Button variant="danger" onClick={() => onClickingDelete(post.id)}>
        Delete Post
      </Button>
      <hr />
    </React.Fragment>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default PostDetail;

