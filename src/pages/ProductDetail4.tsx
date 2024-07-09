import React, { useEffect } from "react";
import DetailM from "../components/DetailM4";

const ProductDetail4: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <DetailM />
    </div>
  );
};

export default ProductDetail4;
