import { FILTER_BUTTONS } from "../../Products.consts";

const CategoryFilter = ({ activeFilter, onFilterChange }) => (
  <div
    role="group"
    className="buttons text-center py-5"
    aria-label="Product category filters"
  >
    {FILTER_BUTTONS.map(({ id, label, value }) => (
      <button
        key={id}
        type="button"
        onClick={() => onFilterChange(value)}
        aria-pressed={activeFilter === value}
        className={`btn btn-sm m-2 ${
          activeFilter === value ? "btn-dark max-w" : ""
        }`}
      >
        {label}
      </button>
    ))}
  </div>
);

export default CategoryFilter;
