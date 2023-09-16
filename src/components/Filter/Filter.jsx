import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/store';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <>
      <input
        type="text"
        placeholder="search in phonebook"
        // defaultValue={filter}
        onChange={changeFilter}
      />
    </>
  );
};
