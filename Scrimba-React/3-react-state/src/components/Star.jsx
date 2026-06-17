import starFilled from "/src/assets/star.png";
import starEmpty from "/src/assets/star-empty.png";

export default function Star({ isFilled, toggleFavorite }) {
  let starIcon = isFilled ? starFilled : starEmpty;

  return (
    <button
      onClick={toggleFavorite}
      aria-pressed={isFilled}
      aria-label={isFilled ? "Remove From Favorites" : "Add To Favorites"}
      className="favorite-button"
    >
      <img
        src={starIcon}
        alt={isFilled ? "filled star icon" : "empty star icon"}
        className="favorite"
      />
    </button>
  );
}
