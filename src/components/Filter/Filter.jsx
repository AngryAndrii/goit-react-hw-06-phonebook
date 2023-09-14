import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/store';

export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filter);

  const changeFilter = event => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <>
      <input
        type="text"
        placeholder="search in phonebook"
        defaultValue={filter}
        onChange={changeFilter}
      />
    </>
  );
};
