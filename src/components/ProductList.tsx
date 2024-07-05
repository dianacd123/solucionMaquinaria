import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
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
    link: "/ProductDetail1",
  },
  {
    id: 2,
    name: "Excavadora caterpillar 320",
    imageUrl: img2,
    link: "/ProductDetail2",
  },
  {
    id: 3,
    name: "Retroexcavadora caterpillar 416F",
    imageUrl: img3,
    link: "/ProductDetail3",
  },
  {
    id: 4,
    name: "Excavadora caterpillar 320E",
    imageUrl: img4,
    link: "/ProductDetail4",
  },
];

const ProductList: React.FC = () => {
  return (
    <div style={styles.container}>
      {products.map((product) => (
        <Link key={product.id} to={product.link} style={styles.link}>
          <ProductCard product={product} />
        </Link>
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
  },
};

export default ProductList;
