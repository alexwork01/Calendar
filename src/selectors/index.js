export const selectorGetApiUrl = state => state.app.apiUrl;
export const selectorGetMonths = state => state.app.months;
export const selectorGetPersons = state => state.app.persons;
export const selectorGetIsLoading = state => state.app.isLoading;
export const selectorGetNotification = state => state.app.notification;
export const selectorGetActiveMonthIndex = state =>
  state.calendar.activeMonthIndex;
