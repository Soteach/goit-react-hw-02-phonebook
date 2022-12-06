import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { PhoneBook } from './PhoneBook/PhoneBook';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.includes(filter));
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
        <ContactForm onSubmit={this.formSubmitHandler} />
        <Filter changeFilter={this.changeFilter} />
        <Contacts contacts={filteredContacts} />
        {/* <section>
          <div>
            <PhoneBook
              onSubmit={this.formSubmitHandler}
              contacts={this.state.contacts}
            />
          </div>
        </section> */}
      </>
    );
  }
}
