import React from "react";
import { Spinner } from "react-bootstrap";

const Loding = () => {
  return (
    <div>
      <Spinner
        className="position-absolute top-50 start-50"
        animation="border"
        variant="primary"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loding;
