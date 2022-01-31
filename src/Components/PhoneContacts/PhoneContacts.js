import PropTypes from "prop-types";
import s from "./PhoneContacts.module.scss";
import sprite from "../../img/sprite.svg";
const ContactsList = ({ contacts = [], delContact, isLogin }) => {
  return (
    <>
      {!isLogin && (
        <ul className={s.Contact__list}>
          {contacts.map((el) => (
            <li key={el.id} className={s.Contact__item}>
              {/* <div className={s.block__contact}> */}
              <div className={s.block__contact__item}>
                <svg width={25} height={25} className={s.block__contact__icon}>
                  <use href={sprite + "#icon-user-tie"} />
                </svg>
                <span> {el.name}</span>
              </div>
              <div className={s.block__contact__item}>
                <svg width={25} height={25} className={s.block__contact__icon}>
                  <use href={sprite + "#icon-phone"} />
                </svg>
                <span> {el.number}</span>
              </div>
              {/* </div> */}
              <button
                type="button"
                onClick={() => delContact(el.id)}
                className={s.Button}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
ContactsList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default ContactsList;
