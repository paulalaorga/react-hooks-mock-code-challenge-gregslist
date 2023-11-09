import React from "react";

function ListingCard({ id, description, image, location, isFavorite, onDelete, onToggleFavorite }) {

  function handleDelete() {
    onDelete(id);
  }

  function handleToggleFavorite() {
    onToggleFavorite(id);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <button className={`emoji-button favorite ${isFavorite ? "active" : ""}`} onClick={handleToggleFavorite}>
          {isFavorite ? "★" : "☆"}
        </button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
