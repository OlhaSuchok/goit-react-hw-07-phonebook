import { useSelector, useDispatch } from 'react-redux';
import { filterContactsAction } from 'redux/filters/filterSlice';
import { selectContactsFilter } from 'redux/selectors';
import React from 'react';
import { FindValue } from './ContactFilter.styled';

export function ContactFilter() {
  const contactsFilter = useSelector(selectContactsFilter);
  const dispatch = useDispatch();

  return (
    <FindValue
      type="text"
      value={contactsFilter}
      onChange={event => dispatch(filterContactsAction(event.target.value))}
      placeholder="Find contacts by name"
    ></FindValue>
  );
}
