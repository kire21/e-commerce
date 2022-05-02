import "./button.style.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google__sign--in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button__container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
