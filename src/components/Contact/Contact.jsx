import { FaUserCheck } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import PropTypes from "prop-types";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ data: { name, number, id } }) {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactItem}>
      <div className={css.contactDetails}>
        <span>
          <FaUserCheck className={css.contactIcon} />
          {name}
        </span>
        <span>
          <FaPhoneVolume className={css.contactIcon} />
          {number}
        </span>
      </div>
      <button onClick={handleDeleteClick} className={css.deleteButton}>
        Delete
      </button>
    </div>
  );
}

Contact.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
