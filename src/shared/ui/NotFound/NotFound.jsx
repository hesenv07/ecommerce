import React from "react";

const NotFound = ({
  title = "No products found",
  description = "Please try again later",
}) => {
  return (
    <div className="col-12 text-center">
      {!!title && <h4>{title}</h4>}
      <p className="text-muted">{description}</p>
    </div>
  );
};

export default NotFound;
