import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/Firebase";

import SignUpForm from "../../components/SignUpForm/SignUpForm";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
