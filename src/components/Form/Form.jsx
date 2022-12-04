import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.css';

export class Form extends Component {
  state = {
    name: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);
    this.setState({ [name]: value });
    // на місце виразу в квадратних лапках буде підставвлено значення атрибута name
    // буквально const a="123" -> [a]:5 -> {123:5}
    // this.setState({ name: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <>
        <h2 className="FormHeader">Phonebook</h2>
        <form className="Form" onSubmit={this.handleSubmit}>
          <label className="FormLabel" htmlFor="name">
            Name
          </label>
          <input
            className="FormInput"
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          ></input>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

// Form.propTypes = { name: PropTypes.string.isRequired };
