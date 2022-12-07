import './ItemList.css';

export const ItemList = ({ name, number, deleteContacts, id }) => {
  return (
    <li className="ContactList">
      {name}: {number}
      <button
        className="ItemButton"
        type="button"
        onClick={() => {
          deleteContacts(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};
