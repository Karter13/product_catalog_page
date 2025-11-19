"use client";

interface StarRatingProps {
  rating: number;
  size?: number;
}

export const StarRating = ({ rating, size = 16 }: StarRatingProps) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: fullStars }).map((_, i) => (
        <svg
          key={`full-${i}`}
          className={`text-yellow-500`}
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.376-2.455a1 1 0 00-1.176 0l-3.376 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.043 9.397c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.97z" />
        </svg>
      ))}

      {halfStar && (
        <svg
          className="text-yellow-500"
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.376-2.455a1 1 0 00-1.176 0l-3.376 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.043 9.397c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.97z"
          />
        </svg>
      )}

      {Array.from({ length: emptyStars }).map((_, i) => (
        <svg
          key={`empty-${i}`}
          className="text-gray-300"
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.376 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.376-2.455a1 1 0 00-1.176 0l-3.376 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.043 9.397c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.97z" />
        </svg>
      ))}
    </div>
  );
};
