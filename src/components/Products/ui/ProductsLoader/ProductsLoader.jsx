import Skeleton from "react-loading-skeleton";

import SkeletonCard from "../SkeletonCard/SkeletonCard";

const ProductsLoader = () => {
  return (
    <>
      <div className="col-12 py-5 text-center">
        <Skeleton height={40} width={560} />
      </div>
      {Array(6)
        .fill()
        .map((_, index) => (
          <SkeletonCard key={index} />
        ))}
    </>
  );
};

export default ProductsLoader;
