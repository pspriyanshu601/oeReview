export default function Departments() {
  return (
    <ul
      className="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdown-button"
    >
      <li>
        <button
          type="button"
          className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Mockups
        </button>
      </li>
      <li>
        <button
          type="button"
          className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Templates
        </button>
      </li>
      <li>
        <button
          type="button"
          className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Design
        </button>
      </li>
      <li>
        <button
          type="button"
          className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Logos
        </button>
      </li>
    </ul>
  );
}
