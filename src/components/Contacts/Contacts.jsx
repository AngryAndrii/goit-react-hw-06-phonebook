import { useDispatch, useSelector } from 'react-redux';
import { StyledList } from './Contacts.styled';
import { deleteContact } from 'redux/store';

export const Contacts = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  return (
    <StyledList>
      {contacts.map(el => (
        <li key={el.id}>
          <span>{el.name}</span> : {el.number}
          <button onClick={() => dispatch(deleteContact(el.id))}>Delete</button>
        </li>
      ))}
    </StyledList>
  );
};
