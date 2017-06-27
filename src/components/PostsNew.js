import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
   //The field argument is responsible for letting the Field component know that it is responsible for the input jsx.
  //renderTitleField does not know that it correspond with Field component.
   renderField(field) {
    const  { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        {/*field.label is targetting the label prop of the Field component. By doing this way, we don't have to repeat ourselves and make different method for each.*/}
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {/*The error in field.meta.error is the same string as the one in validate function.
          This is how we make the error message only appear when we click on submit.
        */}
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title for post"
          name="title"
          component={this.renderField}/>
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}/>
        <Field
          label="Post Blog"
          name="content"
          component={this.renderField}/>
      </form>
    );
  }

  function validate(values) {
    const errors = {};

    //Validate the inputs from 'values'
    if (!values.title) {
      errors.title = "Enter a title.";
    }

    if (!values.categories) {
      errors.categories = "Enter some categories";
    }

    //Checks to see if any content is created in the field
    if (!values.content) {
      errors.content = "Enter some content";
    }

    //If errors is empty, the form is fine to submit
    //If errors has any properties, redux form assumes form is invalid

    return errors;
  }
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  //createPost becomes the mapStateToProps
  connect(null,{ createPost })(PostsNew) //This is how we stack many connect-like helper functions.
);