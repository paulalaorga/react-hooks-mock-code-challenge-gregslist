import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings }) {
    const [listingsData, setListingsData] = useState([]);

useEffect(() => {
  setListingsData(listings); 
}, [listings]);

function handleDelete(id) {
  setListingsData((prevListingsData) => {
    const updatedListings = prevListingsData.filter((listing) => listing.id !== id);
    return [...updatedListings]; // Using spread to create a new array reference
  });
}
function handleToggleFavorite(id) {
  setListingsData((prevListingsData) => {
    const updatedListings = prevListingsData.map((listing) =>
      listing.id === id ? { ...listing, isFavorite: !listing.isFavorite } : listing
    );
    return updatedListings;
  });
}

    
    return (
      <ul className="cards">
        {listingsData.map(listing => (
          <ListingCard 
          key={listing.id} 
          description={listing.description} 
          image={listing.image} 
          location={listing.location} 
          isFavorite={listing.isFavorite}
          onDelete={() => handleDelete(listing.id)}
          onToggleFavorite={() => handleToggleFavorite(listing.id)}
          />
        ))}
      </ul>
    );
  }


export default ListingsContainer;
