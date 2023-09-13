import { useEffect, useState } from 'react';
import { Section } from './Section/Section';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <>
      <Section title="Phonebook">
        <PhoneBook addToAppState={addToMainState} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} handleFilterChange={changeFilter} />
        <Contacts items={visibleContacts} deleteFunction={handleDelete} />
      </Section>
    </>
  );
};
