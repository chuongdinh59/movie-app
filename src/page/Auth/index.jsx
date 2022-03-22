import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

import firebase, { auth } from '../../firebase/config';

const fbProvider = new firebase.auth.FacebookAuthProvider();
const ggProvider = new firebase.auth.GoogleAuthProvider();
function Login(props) {
  const handleFbLogin = () => {
    auth.signInWithPopup(fbProvider);
  };
  const handleGGLogin = () => {
    auth.signInWithPopup(ggProvider);
  };
  const { loading } = useContext(AuthContext);
  console.log(loading);
  return (
    <div className="center">
      <div className="login pointer" onClick={handleFbLogin}>
        <div className="login-logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.9 2H3.1C2.80826 2 2.52847 2.11589 2.32218 2.32218C2.11589 2.52847 2 2.80826 2 3.1V20.9C2 21.0445 2.02845 21.1875 2.08373 21.321C2.13901 21.4544 2.22004 21.5757 2.32218 21.6778C2.42433 21.78 2.54559 21.861 2.67905 21.9163C2.81251 21.9715 2.95555 22 3.1 22H12.68V14.25H10.08V11.25H12.68V9C12.6261 8.47176 12.6885 7.93813 12.8627 7.43654C13.0369 6.93495 13.3188 6.47755 13.6885 6.09641C14.0582 5.71528 14.5068 5.41964 15.0028 5.23024C15.4989 5.04083 16.0304 4.96225 16.56 5C17.3383 4.99521 18.1163 5.03528 18.89 5.12V7.82H17.3C16.04 7.82 15.8 8.42 15.8 9.29V11.22H18.8L18.41 14.22H15.8V22H20.9C21.0445 22 21.1875 21.9715 21.321 21.9163C21.4544 21.861 21.5757 21.78 21.6778 21.6778C21.78 21.5757 21.861 21.4544 21.9163 21.321C21.9715 21.1875 22 21.0445 22 20.9V3.1C22 2.95555 21.9715 2.81251 21.9163 2.67905C21.861 2.54559 21.78 2.42433 21.6778 2.32218C21.5757 2.22004 21.4544 2.13901 21.321 2.08373C21.1875 2.02845 21.0445 2 20.9 2Z"
              fill="#4267B2"
            />
          </svg>
        </div>
        <p className="login-label">Login with Facebook</p>
      </div>
      <div className="login pointer" onClick={handleGGLogin}>
        <div className="login-logo">
          <img src="./img/gglogo.svg" alt="" />
        </div>
        <p className="login-label">Login with Google</p>
      </div>
    </div>
  );
}

export default Login;
