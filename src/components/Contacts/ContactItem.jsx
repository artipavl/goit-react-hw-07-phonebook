import PropTypes from 'prop-types';
import css from 'components/Contacts/ContactList.module.css';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/deleteContact';

export const ContactItem = ({ contact }) => {
  const { name, phone, id } = contact;
  const dispatch = useDispatch();
  return (
    <li className={css.item}>
      {name}: {phone}
      <button
        type="button"
        onClick={() => dispatch(deleteContact(id))}
        className={css.button}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
