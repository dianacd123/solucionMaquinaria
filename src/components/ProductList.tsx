import React, { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import img1 from "../assets/B420FNB.png";
import img2 from "../assets/B320NB.png";
import img3 from "../assets/B416FNB.png";
import img4 from "../assets/B320EP.png";

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  link: string; // Agregamos el campo link
}

const products: Product[] = [
  {
    id: 1,
    name: "Retroexcavadora caterpillar 420F",
    imageUrl: img1,
    link: "/retroexcavadora-caterpillar-420f-2024",
  },
  {
    id: 2,
    name: "Excavadora caterpillar 320",
    imageUrl: img2,
    link: "/excavadora-caterpillar-320-2024",
  },
  {
    id: 3,
    name: "Retroexcavadora caterpillar 416F",
    imageUrl: img3,
    link: "/retroexcavadora-caterpillar-416f-2024",
  },
  {
    id: 4,
    name: "Excavadora caterpillar 320E",
    imageUrl: img4,
    link: "/excavadora-caterpillar-320e-2024",
  },
];

const ProductList: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (link: string) => {
    navigate(link);
  };

  return (
    <div style={styles.container}>
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => handleClick(product.link)}
          style={styles.link}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: "16px",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    cursor: "pointer",
  },
};

export default ProductList;

