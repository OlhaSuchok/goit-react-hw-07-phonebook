import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { nanoid } from 'nanoid';
import {
  ContactFormWrapper,
  ContactFormFieldFirst,
  ContactFormFieldSecond,
  ContactFormButton,
  AiOutlineUserAddIcons,
} from './ContactForm.styled';

export default function ContactForm() {
  const items = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;

    const newContact = { name, phone, id: nanoid() };
    const isContact = items.find(item => item.name === newContact.name);

    if (isContact) {
      toast.warn(`${newContact.name} is already in contacts`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      dispatch(addContact(newContact));
    }
    form.reset();
  };

  return (
    <ContactFormWrapper onSubmit={handleSubmit}>
      <ContactFormFieldFirst
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Name"
      />
      <ContactFormFieldSecond
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Number"
      />
      <ContactFormButton type="submit">
        <AiOutlineUserAddIcons size={34} />
      </ContactFormButton>
      <ToastContainer autoClose={5000} style={{ fontSize: '20px' }} />
    </ContactFormWrapper>
  );
}
