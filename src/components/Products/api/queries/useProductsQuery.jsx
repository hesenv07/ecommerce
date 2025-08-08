import { useState, useEffect } from "react";

import ProductsService from "../services/ProductsService";

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await ProductsService.getProducts();

      const transformedProducts = data.map((product) => ({
        ...product,
        stock: Math.floor(Math.random() * 50) + 1,
        variants: generateVariants(product.category),
        status: getProductStatus(Math.floor(Math.random() * 5)),
      }));

      setProducts(transformedProducts);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchProductsByCategory = async (category) => {
    setLoading(true);
    setError(null);

    try {
      const data = await ProductsService.getProductsByCategory(category);

      const transformedProducts = data.map((product) => ({
        ...product,
        stock: Math.floor(Math.random() * 50) + 1,
        variants: generateVariants(product.category),
        status: getProductStatus(Math.floor(Math.random() * 50) + 1),
      }));

      setProducts(transformedProducts);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    error,
    loading,
    products,
    fetchProducts,
    fetchProductsByCategory,
    hasProducts: products.length > 0,
  };
};

function generateVariants(category) {
  const variants = {
    electronics: [
      {
        id: 1,
        name: "Black",
        available: true,
        stock: Math.floor(Math.random() * 10) + 1,
      },
      {
        id: 2,
        name: "White",
        available: Math.random() > 0.3,
        stock: Math.floor(Math.random() * 8),
      },
    ],
    "men's clothing": [
      {
        id: 1,
        name: "Small",
        available: true,
        stock: Math.floor(Math.random() * 8) + 1,
      },
      {
        id: 2,
        name: "Medium",
        available: true,
        stock: Math.floor(Math.random() * 10) + 1,
      },
      {
        id: 3,
        name: "Large",
        available: Math.random() > 0.2,
        stock: Math.floor(Math.random() * 6),
      },
    ],
    "women's clothing": [
      {
        id: 1,
        name: "Small",
        available: true,
        stock: Math.floor(Math.random() * 8) + 1,
      },
      {
        id: 2,
        name: "Medium",
        available: true,
        stock: Math.floor(Math.random() * 10) + 1,
      },
      {
        id: 3,
        name: "Large",
        available: Math.random() > 0.2,
        stock: Math.floor(Math.random() * 6),
      },
    ],
    jewelery: [
      {
        id: 1,
        name: "Gold",
        available: true,
        stock: Math.floor(Math.random() * 15) + 1,
      },
      {
        id: 2,
        name: "Silver",
        available: Math.random() > 0.1,
        stock: Math.floor(Math.random() * 12) + 1,
      },
    ],
  };

  return variants[category] || [];
}

function getProductStatus(stock) {
  if (stock === 0) return "out_of_stock";
  if (stock <= 5) return "low_stock";
  return "available";
}
