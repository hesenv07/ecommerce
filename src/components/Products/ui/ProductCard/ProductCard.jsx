import React, { useState } from "react";

import { Link } from "react-router-dom";

import { truncateText } from "../../../../shared/lib/utils/StringUtils";
import { formatPrice } from "../../../../shared/lib/utils/TransformUtils";
import { TRUNCATE_LIMITS } from "../../../Products/Products.consts";

import Show from "../../../../shared/ui/Show/Show";

const ProductCard = ({ product, onAddToCart }) => {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants[0]?.name || ""
  );

  const isOutOfStock = product.status === "out_of_stock" || product.stock === 0;
  const hasVariants = product.variants.length > 0;

  const outofStockAriaLabel = isOutOfStock
    ? `${product.title} is out of stock`
    : `Add ${product.title} to cart`;

  const handleAddToCart = () => {
    if (!isOutOfStock) {
      onAddToCart(product);
    }
  };

  return (
    <div className="col-md-4 col-sm-6 col-12 mb-4">
      <article className="card product-card h-100">
        <div className="card-img-container">
          <img
            height={300}
            loading="lazy"
            src={product.image}
            alt={product.title}
            className="card-img-top p-3"
            onError={(e) => {
              e.target.src = "/placeholder-image.jpg";
            }}
          />
        </div>
        <div className="card-body d-flex flex-column">
          <div className="flex-grow-1">
            <h5 className="card-title" title={product.title}>
              {truncateText(product.title, TRUNCATE_LIMITS.TITLE)}
            </h5>
            <p className="card-text" title={product.description}>
              {truncateText(product.description, TRUNCATE_LIMITS.DESCRIPTION)}
            </p>
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item lead"
                aria-label={`Price: ${formatPrice(product.price)}`}
              >
                {formatPrice(product.price)}
              </li>
            </ul>

            <Show when={hasVariants && !isOutOfStock}>
              <select
                value={selectedVariant}
                className="form-select mb-3"
                aria-label="Select product variant"
                onChange={(e) => setSelectedVariant(e.target.value)}
              >
                {product.variants.map((variant) => (
                  <option
                    key={variant.id}
                    value={variant.name}
                    disabled={!variant.available}
                  >
                    {variant.name} ({variant.stock} in stock)
                  </option>
                ))}
              </select>
            </Show>
          </div>
          <div className="card-actions">
            <Show when={!isOutOfStock}>
              <Link
                to={`/product/${product.id}`}
                className="btn btn-dark w-full mb-2"
                aria-label={`View details for ${product.title}`}
              >
                Buy Now
              </Link>
            </Show>

            <button
              className="btn btn-dark w-full"
              disabled={isOutOfStock}
              onClick={handleAddToCart}
              aria-label={outofStockAriaLabel}
            >
              {isOutOfStock ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProductCard;
