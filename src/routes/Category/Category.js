import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { CategoriesContext } from "../../contexts/categories.context";

import "./category.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category__title">{category.toUpperCase()}</h2>
      <div className="category__container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.key} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
