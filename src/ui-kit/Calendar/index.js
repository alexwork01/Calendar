import { connect } from 'react-redux';
import { compose } from 'redux';
import { withTheme } from 'styled-components';

import {
  selectorGetMonths,
  selectorGetPersons,
  selectorGetIsLoading,
  selectorGetActiveMonthIndex
} from '../../selectors';
import { actionSetActiveMonthIndex } from '../../actions/actions';
import Calendar from './Calendar';

const mapStateToProps = state => ({
  months: selectorGetMonths(state),
  persons: selectorGetPersons(state),
  isLoading: selectorGetIsLoading(state),
  activeMonthIndex: selectorGetActiveMonthIndex(state)
});

const mapDispatchToProps = dispatch => ({
  setActiveMonthIndex: payload => dispatch(actionSetActiveMonthIndex(payload))
});

export default compose(
  withTheme,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Calendar);
