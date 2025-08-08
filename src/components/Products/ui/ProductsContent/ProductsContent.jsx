import React from "react";

import ShowProducts from "../ShowProducts/ShowProducts";
import ProductsLoader from "../ProductsLoader/ProductsLoader";

import NotFound from "../../../../shared/ui/NotFound/NotFound";

const ProductsContent = ({
  loading,
  products,
  hasProducts,
  fetchProductsByCategory,
}) => {
  if (loading) {
    return <ProductsLoader />;
  }

  if (hasProducts) {
    return (
      <div className="row justify-content-center">
        <ShowProducts
          products={products}
          onCategoryFilter={fetchProductsByCategory}
        />
      </div>
    );
  }

  return <NotFound />;
};

export default ProductsContent;
