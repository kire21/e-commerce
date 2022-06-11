import DirectoryItem from "../DirectoryItem/DirectoryItem";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory__container">
      {categories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Directory;
