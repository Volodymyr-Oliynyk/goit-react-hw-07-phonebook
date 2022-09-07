import axios from 'axios';
import { BASE_URL } from 'constants/constants';

axios.defaults.baseURL = BASE_URL;

export const getContacts = async () => {
  return await axios.get('/contacts').then(response => response.data);
};

export const postContact = async contact => {
  return await axios.post('/contacts', contact).then(response => response.data);
};

export const fetchDeleteContact = async id => {
  return await axios.delete(`/contacts/${id}`).then(() => id);
};
