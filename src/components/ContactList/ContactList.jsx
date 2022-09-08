import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'components/common/ButtonStyled';
import { ContactItem, List } from './ContactListStyled';
import {getAllContacts,
  deleteCurrentContact} from 'redux/contacts/contactsOperations'
import {
  getContactValue,
  getFilterValue,
} from 'redux/contacts/contactSelectors';

const ContactList = () => {
  const contacts = useSelector(getContactValue);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const visibleContacts = () => {
    const normalizedContacts = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedContacts)
    );
  };

  const filteredContacts = visibleContacts();

  const deleteContactItem = contactId => {
    dispatch(deleteCurrentContact(contactId));
  };



  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <span>{name}</span> : <span>{number}</span>
          <Button type="button" onClick={() => deleteContactItem(id)}>
            Delete
          </Button>
        </ContactItem>
      ))}
    </List>
  );
};

export default ContactList;
