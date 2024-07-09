import React, { useEffect } from "react";
import DetailM1 from "../components/DetailM";

const ProductDetail1: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <DetailM1 />
    </div>
  );
};

export default ProductDetail1;
