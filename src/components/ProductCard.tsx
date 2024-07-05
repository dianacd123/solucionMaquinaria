import React, { CSSProperties } from "react";

interface Product {
  id: number;
  name: string;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div style={styles.card}>
      <img src={product.imageUrl} alt={product.name} style={styles.image} />
      <h2 style={styles.name}>{product.name}</h2>

      <button style={styles.linkButton}>Ver más</button>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  card: {
    border: "1px solid #FDE502",
    borderRadius: "5px",
    padding: "16px",
    width: "300px",
    height: "400px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    marginBottom: "8px", // Reducir el espacio debajo de la imagen
  },
  name: {
    fontSize: "1.5em",
    color: "#D1D5DB",
    margin: "0.3em 0", // Reducir el espacio encima y debajo del nombre
    lineHeight: "1.2", // Reducir el espacio entre líneas
  },
  linkButton: {
    backgroundColor: "#0F4BAD",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
  },
  link: {
    textDecoration: "none",
    width: "100%", // Asegura que el botón ocupe todo el ancho del contenedor padre
  },
};

export default ProductCard;
