import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getVisibleContacts } from 'redux/selectors';

import {
  ContactListItem,
  ContactsList,
  ContactListButtonDelete,
} from './ContactList.styled';

export function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(getVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsList>
      {visibleContacts.map(item => (
        <ContactListItem key={item.id}>
          {item.name}: {item.phone}
          <ContactListButtonDelete
            type="button"
            onClick={() => dispatch(deleteContact(item.id))}
          >
            Delete
          </ContactListButtonDelete>
        </ContactListItem>
      ))}
    </ContactsList>
  );
}
