/* eslint-disable react/prop-types */

function OneRow({ rating, value }) {
  return (
    <div className="flex items-center mt-4 bg-green-30 relative">
      <a className="w-[36px] text-sm font-medium text-blue-500 hover:underline text-nowrap">
        {rating} star
      </a>
      <div className="h-5 absolute left-12 w-3/4 rounded bg-gray-700">
        <div
          className="h-5 bg-yellow-300 rounded"
          style={{ width: `${value}%` }}
        />
      </div>
      {/* <span className="text-sm font-medium text-gray-400">{value}%</span> */}
    </div>
  );
}

function OneStar({ full }) {
  return full ? (
    <svg
      className="w-4 h-4 text-yellow-300 me-1"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  ) : (
    <svg
      className="w-4 h-4 me-1 text-gray-500"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );
}

export default function StarStat({ rating, arrOneToFive, totalRatings }) {
  const roundedRating = Math.round(rating);
  const percentArrOneToFive = arrOneToFive.map((value) =>
    Math.round((value / totalRatings) * 100)
  );

  return (
    <div className="w-full bg-blue-30 flex justify-center md:ml-12">
      <div className="w-4/5 bg-red-40">
        <div className="flex items-center mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <OneStar key={i} full={i < roundedRating} />
            ))}
          </div>
          <p className="ms-1 text-sm font-medium text-gray-400">
            {rating.toFixed(1)}
          </p>
          <p className="ms-1 text-sm font-medium text-gray-400">out of</p>
          <p className="ms-1 text-sm font-medium text-gray-400">5</p>
        </div>
        <p className="text-sm font-medium text-gray-400">
          {totalRatings} ratings
        </p>
        <div>
          {percentArrOneToFive.map((rating, index) => (
            <OneRow key={index} rating={index + 1} value={rating} />
          ))}
        </div>
      </div>
    </div>
  );
}
