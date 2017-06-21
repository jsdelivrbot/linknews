import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
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
          name="title"/>
        <Field
          label="Categories"
          name="categories"/>
        <Field
          label="Post Blog"
          name="content"/>
      </form>
    );
  }
}