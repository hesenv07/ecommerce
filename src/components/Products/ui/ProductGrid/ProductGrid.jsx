import ProductCard from "../ProductCard/ProductCard";

import NotFound from "../../../../shared/ui/NotFound/NotFound";

const ProductGrid = ({ products, onAddToCart }) => {
  if (!products?.length) {
    return (
      <NotFound
        title=""
        description="No products found matching your criteria."
      />
    );
  }

  return (
    <div className="row">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
