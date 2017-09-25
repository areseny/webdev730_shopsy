import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchForm from './search_form';

export default withRouter(
  connect(
    null,
    null
  )(SearchForm)
);
