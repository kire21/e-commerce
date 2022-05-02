import "./Button.style.scss";

const BUTTON_TYPES_CLASSES = {
  google: "google__sign--in",
  inverted: "inverted",
  default: "default",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button__container ${BUTTON_TYPES_CLASSES[buttonType]}`}
      {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
