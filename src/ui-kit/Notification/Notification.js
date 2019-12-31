import React, { memo, useEffect } from 'react';
import 'react-notifications/lib/notifications.css';
import {
  NotificationContainer,
  NotificationManager
} from 'react-notifications';

const createNotification = (type, message, title) => {
  const notification = {
    info: () =>
      NotificationManager.info(
        message || 'Info message',
        title || 'Information',
        5000
      ),
    success: () =>
      NotificationManager.success(message || 'Success!', title || '', 5000),
    warning: () =>
      NotificationManager.warning(message || 'Warning', title || '', 5000),
    error: () =>
      NotificationManager.error(
        message ||
          'Something went wrong. Error. Please try reloading this page',
        title || 'OOps',
        5000
      )
  };

  return notification[type]();
};

const Notification = memo(props => {
  const { notification, setNotification } = props;
  const { type, message, title } = notification;

  useEffect(() => {
    if (type) {
      createNotification(type, message, title);
      setNotification({});
    }
  }, [type, message, title]);

  return <NotificationContainer />;
});

export default Notification;
