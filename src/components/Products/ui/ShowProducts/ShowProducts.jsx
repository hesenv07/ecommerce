import { useCallback, useMemo, useState } from "react";

import { useDispatch } from "react-redux";

import toast from "react-hot-toast";

import { addCart } from "../../../../redux/action";

import ProductGrid from "../ProductGrid/ProductGrid";
import CategoryFilter from "../CategoryFilter/CategoryFilter";

const ShowProducts = ({ products = [] }) => {
  const dispatch = useDispatch();

  const [activeFilter, setActiveFilter] = useState(null);

  const filteredProducts = useMemo(() => {
    if (!activeFilter) return products;
    return products.filter((product) => product.category === activeFilter);
  }, [products, activeFilter]);

  const handleFilterChange = useCallback((filterValue) => {
    setActiveFilter(filterValue);
  }, []);

  const handleAddToCart = useCallback(
    (product) => {
      try {
        dispatch(addCart(product));
        toast.success(`${product.title} added to cart!`, {
          duration: 2000,
          position: "top-right",
        });
      } catch (error) {
        console.error("Failed to add product to cart:", error);
        toast.error("Failed to add product to cart. Please try again.");
      }
    },
    [dispatch]
  );

  if (!Array.isArray(products)) {
    return (
      <div className="alert alert-warning" role="alert">
        Unable to display products. Please try refreshing the page.
      </div>
    );
  }

  return (
    <section className="products-section" aria-label="Product catalog">
      <CategoryFilter
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
      <ProductGrid products={filteredProducts} onAddToCart={handleAddToCart} />
    </section>
  );
};

export default ShowProducts;
