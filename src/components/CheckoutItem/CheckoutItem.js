import "./checkoutItem.scss";

const CheckoutItem = ({ cartItem }) => {
  const { id, name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout__item--container" key={id}>
      <div className="image__container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove__button">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
