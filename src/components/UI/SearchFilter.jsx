const SearchFilter = ({ search, setSearch, filter, setFilter, countries , setCountries }) => {
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const sortCountries = (order) => {

    if (order === "asc") {
      setCountries((prevCountries) =>
        [...prevCountries].sort((a, b) => a.name.common.localeCompare(b.name.common))
      );
    }
    if (order === "des") {
      setCountries((prevCountries) =>
        [...prevCountries].sort((a, b) => b.name.common.localeCompare(a.name.common))
      );
    }

  }


  return (
    <section className="section-searchFilter container">
      <div>
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <button onClick={() => sortCountries("asc")}>Asc</button>
      </div>

      <div>
        <button onClick={() => sortCountries("des")}>Desc</button>
      </div>

      <div>
        <select
          className="select-section"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default SearchFilter;
