import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../actions';

class ShowPosts extends Component {
  componentDidMount() {
    if (!this.props.post) { //this.props.post was accessed from mapStateToProps
      const { id } = this.props.match.params; //This is provided by React Router
      this.props.fetchPost(id);
    }
  }

  render() {
    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
          >
          Delete Post
          </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

//Making post an application state. Will be available as this.props.post
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default ShowPosts