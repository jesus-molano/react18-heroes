import './login-page.css'
import {useNavigate} from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate()
  const onLogin = () => {
    navigate('/',{replace: true})
  }

  return (
    <>
      <div className="login-background"></div>
      <div className="login-container">
        <div className="login-card">
          <h1>Login</h1>
          <button
            className="btn btn-outline-primary pe-3"
            onClick={onLogin}>Sign In
          </button>
        </div>
      </div>
    </>
  );
};


