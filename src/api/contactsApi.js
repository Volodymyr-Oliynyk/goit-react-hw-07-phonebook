import axios from 'axios';
import { BASE_URL } from 'constants/constants';

const customAxios = axios.create({
  baseURL: BASE_URL,
});

export const getContacts = async () => {
  const { data } = await customAxios.get('/contacts');
  return data;
};

export const addContact = async contact => {
  const { data } = await customAxios.post('/contacts', contact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await customAxios.delete(`/contacts/${id}`);
  return data;

};
