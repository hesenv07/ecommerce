import React from "react";

import { useProducts } from "./api/queries/useProductsQuery";

import ProductsContent from "./ui/ProductsContent/ProductsContent";

import ErrorMessage from "../../shared/ui/ErrorMessage/ErrorMessage";

const Products = () => {
  const { products, loading, error, fetchProductsByCategory, hasProducts } =
    useProducts();

  if (error) {
    return (
      <ErrorMessage error={error} onRetry={() => window.location.reload()} />
    );
  }

  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="display-7 text-center">Latest Products</h2>
            {!loading && hasProducts && (
              <span className="badge bg-primary fs-6">
                {products.length} Products
              </span>
            )}
          </div>
          <hr />
        </div>
      </div>

      <ProductsContent
        loading={loading}
        products={products}
        hasProducts={hasProducts}
        fetchProductsByCategory={fetchProductsByCategory}
      />
    </div>
  );
};

export default Products;
