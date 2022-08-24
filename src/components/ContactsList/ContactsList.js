import { useSelector } from 'react-redux';
import { useDeleteContactMutation } from '../../services/contactsAPI.js';

import PropTypes from 'prop-types';
import s from './Contacts.module.css';

export default function ContactsList({ contacts }) {
  const filterValue = useSelector(state => state.filter);

  const [deleteContact] = useDeleteContactMutation();

  return (
    <ul className={s.list}>
      {contacts &&
        contacts
          .filter(({ name }) => name.toLowerCase().includes(filterValue))
          .map(contact => (
            <li key={contact.id} className={s.item}>
              {contact.name}: {contact.number}
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </li>
          ))}
    </ul>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
