import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "@/auth/index.js";
import './login-page.css'
import {useForm} from "@/hooks/useForm.js";

export const LoginPage = () => {
  const navigate = useNavigate()
  const {login} = useContext(AuthContext);
  const {userName, onInputChange} = useForm({
    userName: ''
  })

  const onLogin = (e) => {
    e.preventDefault()
    const lastPath = localStorage.getItem('lastPath') || '/'
    login(userName);
    navigate(lastPath,{replace: true})
  }

  return (
    <>
      <div className="login-background"></div>
      <div className="login-container">
        <div className="login-card">
          <h1>Login</h1>
          <form onSubmit={onLogin} className={'d-flex flex-column gap-2'}>
            <input
              type="text"
              name='userName'
              required
              value={userName}
              onChange={onInputChange}
              autoComplete={'off'}
              className={'form-control'}
              placeholder={'User name'}
              maxLength={14}
            />
            <button
              className="btn btn-outline-primary pe-3"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};


