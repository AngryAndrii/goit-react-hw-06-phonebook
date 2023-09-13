import { useSelector } from 'react-redux';
import { StyledList } from './Contacts.styled';

export const Contacts = ({ items, deleteFunction }) => {
  return (
    <StyledList>
      {items.map(el => (
        <li key={el.id}>
          <span>{el.name}</span> : {el.number}
          <button
            onClick={() => {
              deleteFunction(el.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </StyledList>
  );
};
