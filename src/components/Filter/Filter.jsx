import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/store';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <input
        type="text"
        placeholder="search in phonebook"
        // defaultValue={value}
        onChange={evt => dispatch(filterContacts(evt.target.value))}
      />
    </>
  );
};
