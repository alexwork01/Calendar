import { connect } from 'react-redux';
import Notification from './Notification';

import { selectorGetNotification } from '../../selectors';
import { actionSetNotification } from '../../actions/actions';

const mapStateToProps = state => ({
  notification: selectorGetNotification(state)
});

const mapDispatchToProps = dispatch => ({
  setNotification: payload => dispatch(actionSetNotification(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);
