import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from '../Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';

export class PhoneBook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.state.contacts.some(
      i =>
        (i.name.toLowerCase() === contact.name.toLowerCase() &&
          i.name === contact.name) ||
        i.number === contact.number
    )
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  findContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  changeInput = event => {
    this.setState({ filter: event.target.value });
  };

  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <h1 className="">Phonebook</h1>
        <ContactForm onSubmit={this.formSubmit} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} changeInput={this.changeInput} />
        <Contacts
          contacts={this.findContacts()}
          deleteContacts={this.deleteContacts}
        />
      </div>
    );
  }
}
