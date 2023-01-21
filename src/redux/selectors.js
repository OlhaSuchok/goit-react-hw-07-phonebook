import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getContactsFilter = state => state.filter.filter;

export const getVisibleContacts = createSelector(
  [getContacts, getContactsFilter],
  (items, filter) => {
    if (filter.trim() !== '') {
      return items.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return items;
  }
);
