import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/selectors"; // Оновлений імпорт
import { useSelector } from "react-redux";

import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={css.contactList}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
}
