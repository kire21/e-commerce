import CategoryItem from "../CategoryItem/CategoryComponent";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory__container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Directory;
