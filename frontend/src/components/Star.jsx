import { useState } from "react";
import { FaStar } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
export default function Star({ rating, setRating }) {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex h-fit gap-3">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              className="hidden"
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={24}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
    </div>
  );
}
