import React, { useEffect } from "react";
import DetailM from "../components/DetailM2";

const ProductDetail2: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <DetailM />
    </div>
  );
};

export default ProductDetail2;

