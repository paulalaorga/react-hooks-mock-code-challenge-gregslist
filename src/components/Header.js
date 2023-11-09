import React, {useState} from "react";
import Search from "./Search";

function Header({ listings, setListings }) {
  const[searchValue, setSearchValue] = useState("");

  function handleSearch(value) {
    setSearchValue(value);
    filterListings(value);
  }

  function filterListings(value) {
    const filteredListings = listings.filter((listing) => {
      const nameMatches = 
      listing.name && listing.name.toLowerCase().includes(value.toLowerCase());
      const descriptionMatches =
      listing.description &&
      listing.description.toLowerCase().includes(value.toLowerCase());
      return nameMatches || descriptionMatches;
    });
    setListings(filteredListings);
  }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={handleSearch} />
    </header>
  );
}

export default Header;
