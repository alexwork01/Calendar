import axios from 'axios';

export const getPersons = url =>
  axios
    .get(url)
    .then(response => ({ response: response.data }))
    .catch(error => ({ error }));
