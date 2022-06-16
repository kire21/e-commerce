import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./categoryPreview.styles.js";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={title}>
          <Title>{title.toUpperCase()}</Title>
        </Link>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
