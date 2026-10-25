function FilterForm({ filter, setFilter }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Filter posts by title"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </form>
  );
}

export default FilterForm;