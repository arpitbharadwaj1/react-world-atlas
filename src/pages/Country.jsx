import { useEffect, useTransition, useState } from "react";
import { getCountries } from "../api/postApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/Layout/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    startTransition(async () => {
      const response = await getCountries();
      setCountries(response?.data);
    });
  }, []);

  if (isPending) {
    return <Loader />;
  }

  const searchCountry = (country) => {
    if (!search) return true;
    return country.name.common.toLowerCase().includes(search.toLowerCase());
  }

  const filteredCountries = countries.filter((country) => {
    return searchCountry(country) && (filter === "All" || country.region === filter);
  });

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />
      <ul className="grid grid-four-cols">
        {filteredCountries.map((currentCountry, index) => (
          <CountryCard key={index} country={currentCountry} />
        ))}
      </ul>
    </section>
  );
};

export default Country;
