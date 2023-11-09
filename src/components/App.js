import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);


  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(response => response.json())
      .then(data => setListings(data))
      .catch(error => console.error("Error fetching listings:", error));
  }, []);

  

  function handleDelete(id) {
    setListings((prevListings) => prevListings.filter((listing) => listing.id !== id));
  }
  function handleToggleFavorite(id) {
    setListings((prevListingsData) => 
    prevListingsData.map((listing) =>
        listing.id === id ? { ...listing, isFavorite: !listing.isFavorite } : listing
      )
    );
  }
      

  return (
    <div className="app">
      <Header listings={listings} setListings={setListings} />
      <ListingsContainer 
      listings={listings} 
      onDelete={handleDelete}
      onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}

export default App;
