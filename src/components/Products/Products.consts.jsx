export const CATEGORIES = {
  ALL: "all",
  JEWELERY: "jewelery",
  ELECTRONICS: "electronics",
  MENS_CLOTHING: "men's clothing",
  WOMENS_CLOTHING: "women's clothing",
};

export const FILTER_BUTTONS = [
  { id: CATEGORIES.ALL, label: "All", value: null },
  {
    id: CATEGORIES.MENS_CLOTHING,
    label: "Men's Clothing",
    value: CATEGORIES.MENS_CLOTHING,
  },
  {
    id: CATEGORIES.WOMENS_CLOTHING,
    label: "Women's Clothing",
    value: CATEGORIES.WOMENS_CLOTHING,
  },
  { id: CATEGORIES.JEWELERY, label: "Jewelery", value: CATEGORIES.JEWELERY },
  {
    id: CATEGORIES.ELECTRONICS,
    label: "Electronics",
    value: CATEGORIES.ELECTRONICS,
  },
];

export const TRUNCATE_LIMITS = {
  TITLE: 50,
  DESCRIPTION: 90,
};
