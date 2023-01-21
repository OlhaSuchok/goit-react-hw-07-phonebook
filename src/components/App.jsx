import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
// import { getIsLoading } from 'redux/selectors';
import { Box } from 'components/Box/Box';
import ContactForm from './ContactForm/ContactForm';
import { ContactFormTitle } from './ContactFormTitle/ContactFormTitle';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { getContacts } from 'redux/selectors';

export default function PhoneBoock() {
  const items = useSelector(getContacts);
  // const loading = useSelector(getIsLoading);

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
        p={30}
        bg="secondary"
        border="2px solid"
        borderColor="border"
        borderRadius={8}
      >
        <ContactFormTitle>PhoneBook</ContactFormTitle>
        <ContactForm />
        <ContactFilter />
        {/* {items.length > 0 && <ContactFormTitle>Contacts</ContactFormTitle>}
        {items.length > 0 && <ContactList />} */}
        {items && <ContactFormTitle>Contacts</ContactFormTitle>}
        {items && <ContactList />}
        {/* {items && <ContactList />} */}
      </Box>
    </div>
  );
}
