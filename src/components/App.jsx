import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import './App.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  changeFilter = filterValue => {
    this.setState({ filter: filterValue });
  };

  // componentDidMount() {
  //   const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  formSubmitHandler = data => {
    // console.log(data.name);
    // console.log(data.number);
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: nanoid(),
            name: data.name,
            number: data.number,
          },
        ],
      };
    });
  };
  // Даною функцією ми отримуємо доступ до даних форми на момент сабміту
  // тобто даною ф-цією App отримує дані при їх відправці.

  render() {
    const filteredContacts = this.filteredContacts();
    return (
      <>
        <div>
          <h1 className="FormHeader">Phonebook</h1>
          <ContactForm onSubmit={this.formSubmitHandler} />
          <h2 className="ContactsHeader">Contacts</h2>
          <Filter changeFilter={this.changeFilter} />
          <ContactList contacts={filteredContacts} />
        </div>
      </>
    );
  }
}
