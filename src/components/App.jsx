import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Box } from 'components/Box/Box';
import ContactForm from './ContactForm/ContactForm';
import {
  ContactFormTitle,
  ContactFormSecondTitle,
} from './ContactFormTitle/ContactFormTitle';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { selectContacts } from 'redux/selectors';

export default function PhoneBoock() {
  const items = useSelector(selectContacts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
      }}
    >
      <Box
        height={750}
        p={30}
        bg="primary"
        border="2px solid"
        borderColor="border"
        borderRadius={8}
      >
        <ContactFormTitle>PHONEBOOK</ContactFormTitle>
        <ContactForm />
        <ContactFilter />
        <ContactFormSecondTitle>CONTACTS</ContactFormSecondTitle>
        {items && <ContactList />}
      </Box>
    </div>
  );
}
