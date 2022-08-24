import { ToastContainer } from 'react-toastify';
import { useFetchContactsQuery } from './services/contactsAPI';

import ContactsForm from './components/ContactsForm';
import Filter from './components/Filter';
import ContactsList from './components/ContactsList';
import Loader from './components/Loader/Loader';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

export default function App() {
  const { data: contacts, isFetching } = useFetchContactsQuery();

  return (
    <section className="phonebook">
      <h1 className="title">Phonebook</h1>
      <ContactsForm contacts={contacts} />

      <h2 className="title">Contacts</h2>
      <Filter />
      {isFetching && <Loader />}
      <ContactsList contacts={contacts} />
      <ToastContainer />
    </section>
  );
}
