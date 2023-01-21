import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { nanoid } from 'nanoid';
import {
  ContactFormWrapper,
  ContactFormText,
  ContactFormField,
  ContactFormButton,
} from './ContactForm.styled';

export default function ContactForm() {
  const items = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;

    const newContact = { name, phone, id: nanoid() };
    const isContact = items.find(item => item.name === newContact.name);

    if (isContact) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      dispatch(addContact(newContact));
    }
    form.reset();
  };

  return (
    <ContactFormWrapper onSubmit={handleSubmit}>
      <ContactFormText htmlFor="">
        Name
        <ContactFormField
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </ContactFormText>
      <ContactFormText htmlFor="">
        Number
        <ContactFormField
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </ContactFormText>
      <ContactFormButton type="submit">Add contact</ContactFormButton>
    </ContactFormWrapper>
  );
}