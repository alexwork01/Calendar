export const getColorKey = value => {
  if (value < 3) {
    return 'grey';
  }

  if (value < 7) {
    return 'blue';
  }

  if (value < 11) {
    return 'green';
  }

  return 'red';
};

export const sortByDate = (a, b) => new Date(a.dob) - new Date(b.dob);

export const getFilteredPersons = (monthIndex, persons) =>
  persons
    .filter(person => new Date(person.dob).getMonth() === monthIndex)
    .sort(sortByDate);

export const getMonthType = (monthIndex, persons) => {
  const amount = getFilteredPersons(monthIndex, persons).length;

  return getColorKey(amount);
};

export const getBirthday = dob => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return new Date(dob).toLocaleDateString('en-EN', options);
};

export const scrollToComponent = ref => {
  ref.current.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};
