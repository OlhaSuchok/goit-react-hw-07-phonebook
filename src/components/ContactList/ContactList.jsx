import { useDispatch, useSelector } from 'react-redux';
import { getContacts, setContactsFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import {
  ContactListItem,
  ContactsList,
  ContactListButtonDelete,
} from './ContactList.styled';

export function ContactList() {
  const dispatch = useDispatch();
  // const contacts = useSelector(getContacts);
  const items = useSelector(getContacts);
  const contactsFilter = useSelector(setContactsFilter);

  const applyFilter = () => {
    if (contactsFilter) {
      return items.filter(item =>
        item.name.toLowerCase().includes(contactsFilter.toLowerCase())
      );
    }
    return items;
  };

  // console.log(applyFilter());
  // const m = applyFilter();
  // const n = m.map(item => item.name);
  // console.log(n);

  return (
    <ContactsList>
      {applyFilter().map(item => (
        <ContactListItem key={item.id}>
          {item.name}: {item.number}
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
