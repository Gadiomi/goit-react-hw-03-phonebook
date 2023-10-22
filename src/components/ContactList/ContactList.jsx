import css from '../../components/ContactList/ContactList.module.css';

const ContactList = ({ contacts, OnDelite }) => {
  return (
    <ul className={css.contact_list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={css.contact_item} key={id}>
            <p className={css.contact__text}>{name}</p>
            <p className={css.contact__text}>{number}</p>
            <button className={css.btn} onClick={() => OnDelite(id)}>
              Видалити
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
