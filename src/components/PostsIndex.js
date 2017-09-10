import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPost() {}

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <h3>Posts</h3>
        </div>
      </div>
    );
  }
}