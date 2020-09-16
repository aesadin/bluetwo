import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group>
          <Form.Control type="text" name="title" defaultValue={props.defaultTitle} placeholder = "title" required/>
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" name="author" defaultValue={props.defaultAuthor} placeholder="your name" />
        </Form.Group>
        <Form.Group>
          <Form.Control as="textarea" name="body" defaultValue={props.defaultBody} placeholder="body content" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" name="date" defaultValue={props.defaultDate} placeholder="date" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" name="picture" defaultValue={props.defaultPicture} placeholder="image url" />
        </Form.Group>
        <div style={{ padding: 10 }}>
          <Button variant="info" type="submit">
            {props.buttonText}
          </Button>
        </div>
      </Form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  defaultTitle: PropTypes.string,
  defaultAuthor: PropTypes.string,
  defaultBody: PropTypes.string,
  defaultDate: PropTypes.string,
  defaultPicture: PropTypes.string,
};

export default ReusableForm;