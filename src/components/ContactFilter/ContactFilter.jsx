import { useSelector, useDispatch } from 'react-redux';
import { filterContactsAction } from 'redux/filters/filterSlice';
import { getContactsFilter } from 'redux/selectors';
import React from 'react';
import { FindText, FindValue } from './ContactFilter.styled';

export function ContactFilter() {
  const contactsFilter = useSelector(getContactsFilter);
  const dispatch = useDispatch();

  return (
    <FindText>
      Find contacts by name
      <FindValue
        type="text"
        value={contactsFilter}
        onChange={event => dispatch(filterContactsAction(event.target.value))}
      ></FindValue>
    </FindText>
  );
}
