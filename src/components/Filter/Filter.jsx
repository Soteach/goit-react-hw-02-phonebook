import { Component } from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

export class Filter extends Component {
  handlerChange = e => {
    const filteredValue = e.currentTarget.value;
    this.props.changeFilter(filteredValue);
  };

  render() {
    return (
      <label className="" htmlFor="">
        Find contacts by name
        <input
          className="ContactInput"
          type="text"
          name="name"
          onChange={this.handlerChange}
        />
      </label>
    );
  }
}

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   changeInput: PropTypes.func.isRequired,
// };
