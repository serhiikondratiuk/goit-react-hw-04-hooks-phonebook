import { useState, useEffect } from "react";
import Section from "./components/Section";
import Form from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import { nanoid } from "nanoid";
import s from "./App.module.css";

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) ?? []
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    const repeatedName = contacts.find(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    repeatedName
      ? alert(`${newContact.name} is already in contacts`)
      : setContacts([newContact, ...contacts]);
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  const handleFilterChange = (e) => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className={s.wrapper}>
      <Section>
        <h1 className={s.title}>Phonebook</h1>
        <Form onSubmit={addContact} />
      </Section>

      <Section>
        <h2 className={s.title}>Contacts</h2>
        <Filter value={filter} onChange={handleFilterChange} />
        <ContactList
          contacts={getFilteredContacts()}
          onDeleteContact={deleteContact}
        />
      </Section>
    </div>
  );
}

export default App;
