import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignInForm from "../../components/SignInForm copy/SignInForm";
import "./authentication.style.scss";

const Authentication = () => {
  return (
    <div className="auth__container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
