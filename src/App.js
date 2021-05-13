// Components
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

const App = () => {
  return (
    <div className="phonebook">
      <h1 className="phonebook_title">Phonebook</h1>
      <ContactForm />
      <h2 className="phonebook_title">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
