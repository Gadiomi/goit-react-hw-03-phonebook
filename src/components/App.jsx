import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import Container from './Container/Container';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  contactFormCreate = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const { contacts } = this.state;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is alredy in contacts `);
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  ChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  onDelete = todoId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(cont => cont.id !== todoId),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const NormFilter = filter.toLowerCase();
    const contMas = contacts.filter(cont =>
      cont.name.toLowerCase().includes(NormFilter)
    );

    return (
      <>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.contactFormCreate} />
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.ChangeFilter} />
          <ContactList contacts={contMas} OnDelite={this.onDelete} />
        </Container>
      </>
    );
  }
}

export default App;
