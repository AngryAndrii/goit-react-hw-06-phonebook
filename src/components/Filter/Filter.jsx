export const Filter = ({ value, handleFilterChange }) => {
  return (
    <>
      <input
        type="text"
        placeholder="search in phonebook"
        defaultValue={value}
        onChange={evt => {
          handleFilterChange(evt.target.value);
        }}
      />
    </>
  );
};
