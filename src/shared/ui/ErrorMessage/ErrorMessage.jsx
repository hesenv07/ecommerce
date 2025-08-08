import React from "react";

const ErrorMessage = ({ error, onRetry }) => {
  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12 text-center">
          <div className="alert alert-danger">
            <h4>Oops! Something went wrong</h4>
            <p>{error}</p>
            <button className="btn btn-danger" onClick={onRetry}>
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
