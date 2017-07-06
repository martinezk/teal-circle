import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as bookActions from '../actions/book-actions';
import BookList from './BookList';
import Search from './Search';

class BookContainer extends Component {
  render() {
    const {books} = this.props;

    return (
        <Search addBook={this.props.actions.addBook}/>
        <BookList books={books} />
    );
  }
}

BookContainer.propTypes = {
  books: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    books: state.searchResults || []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators( bookActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);