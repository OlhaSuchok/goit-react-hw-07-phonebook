import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';
import { deleteContact } from 'redux/operations';
import { useEffect } from 'react';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { fetchContacts } from 'redux/operations';
import {
  selectVisibleContacts,
  selectIsLoading,
  selectError,
} from 'redux/selectors';

import {
  ContactListItem,
  ContactsList,
  ContactListButtonDelete,
  ContactListTextWrapper,
  ContactListItemName,
  ContactListItemPhone,
  MdDeleteOutlineIcons,
} from './ContactList.styled';

export function ContactList() {
  const dispatch = useDispatch();
  const isloading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsList>
      {isloading && !error && <Loader />}
      {error && <ErrorMessage />}
      {visibleContacts.map(item => (
        <ContactListItem key={item.id}>
          <ContactListTextWrapper>
            <ContactListItemName>{item.name}</ContactListItemName>
            <ContactListItemPhone>{item.phone}</ContactListItemPhone>
          </ContactListTextWrapper>
          <ContactListButtonDelete
            type="button"
            onClick={() => dispatch(deleteContact(item.id))}
          >
            <MdDeleteOutlineIcons size={34} />
          </ContactListButtonDelete>
        </ContactListItem>
      ))}
    </ContactsList>
  );
}
