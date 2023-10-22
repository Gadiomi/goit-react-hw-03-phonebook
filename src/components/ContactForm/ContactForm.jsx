import { Component } from 'react';
import css from '../../components/ContactForm/ContactForm.module.css';

class ContactForm extends Component {
  state = {
    number: '',
    name: '',
  };

  hendelChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  hendelSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      number: '',
      name: '',
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.hendelSubmit}>
          <label htmlFor="" classNam={css.label}>
            Name
            <input
              className={css.contact_inp}
              onChange={this.hendelChange}
              value={this.state.name}
              type="text"
              name="name"
              required
            />
          </label>
          <label htmlFor="" className={css.label}>
            Number
            <input
              className={css.contact_inp}
              onChange={this.hendelChange}
              value={this.state.number}
              type="text"
              name="number"
              required
            />
          </label>
          <button className={css.sabmit_contact} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
