import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchForm from './search_form';

const mapStateToProps = (state, ownProps) => ({
  
});


export default withRouter(
  connect(
    mapStateToProps,
    null
  )(SearchForm)
);
