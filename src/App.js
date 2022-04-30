import "./categories.style.scss";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jacket",
    },
    {
      id: 3,
      title: "Snekears",
    },
    {
      id: 4,
      title: "Womens",
    },
    {
      id: 5,
      title: "Mens",
    },
  ];

  return (
    <div className="categories__container">
      {categories.map((category) => {
        return (
          <div key={category.id} className="category__container">
            <div className="background__image" />
            <div className="category__body--container">
              <h2>{category.title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
