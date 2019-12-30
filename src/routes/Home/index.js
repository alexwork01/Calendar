import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTheme } from 'styled-components';

import { actionGetRequest } from '../../actions/actions';
import Home from './HomeRoute';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  getPersonsRequest: () => dispatch(actionGetRequest())
});

export default compose(
  withTheme,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Home);
