import { Component } from 'react';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };
  // Даною функцією ми отримуємо доступ до даних форми на момент сабміту
  // тобто даною ф-цією App отримує дані при їх відправці.

  render() {
    return (
      <>
        <Form onSubmit={this.formSubmitHandler} />
        <Contacts data={this.data} />
      </>
    );
  }
}
