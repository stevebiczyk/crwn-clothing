import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const handleSignInWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={handleSignInWithGoogle}>
        Sign In With Google Popup
      </button>
    </div>
  );
};

export default SignIn;
