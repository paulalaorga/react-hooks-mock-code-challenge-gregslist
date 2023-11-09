import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer(props) {
  const { listings,onDelete,onToggleFavorite } = props;

  return (
    <ul className="cards">
      {listings.map((listing) => (
        <ListingCard
          key={listing.id}
          description={listing.description}
          image={listing.image}
          location={listing.location}
          isFavorite={listing.isFavorite}
          onDelete={() => onDelete(listing.id)}
          onToggleFavorite={() => onToggleFavorite(listing.id)} 
        />
      ))}
    </ul>
  );
}

export default ListingsContainer;
