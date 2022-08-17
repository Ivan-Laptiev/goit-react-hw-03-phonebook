import { Component } from "react";
import PropTypes from "prop-types";
import PhonebookForm from "components/PhonebookForm/PhonebookForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { Container } from "./App.styled";

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

  addContact = (newContact) => {
    const contactsNames = this.state.contacts.map(contact => contact.name);

    if (contactsNames.includes(newContact.name)) {
      alert(`${newContact.name} is already in contacts`)
    } else {
      this.setState(({ contacts}) => ({contacts: [newContact,...contacts]}))
    }
    
  }

  deleteContact = (id) => {
    this.setState(prevState => ({contacts: prevState.contacts.filter(contact => contact.id !== id)}))
  }

  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  }

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  render() {
    const filteredContacts = this.getFilteredContacts();
  
    return (
    <Container>
      <h1>Phonebook</h1>
      <PhonebookForm onAddContact={this.addContact} />
      <h2>Contacts</h2>
      <Filter value={ this.state.filter} onChange={this.handleFilter}  />
      <ContactList value={filteredContacts} onDeleteContact={this.deleteContact} />
    </Container>
    );
  }
};

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string
}


