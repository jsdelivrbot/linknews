import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  render() {
    return (
      <form>
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