import React, { useEffect } from "react";
import DetailM from "../components/DetailM3";

const ProductDetail3: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <DetailM />
    </div>
  );
};

export default ProductDetail3;
