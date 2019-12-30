import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTheme } from 'styled-components';

import { selectorGetIsLoading } from '../../selectors';
import TopLoadingBar from './TopLoadingBar';

const mapStateToProps = state => ({
  isLoading: selectorGetIsLoading(state)
});

export default compose(
  withTheme,
  connect(mapStateToProps)
)(TopLoadingBar);
