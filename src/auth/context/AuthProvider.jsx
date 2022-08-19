import {useReducer} from "react";
import {AuthContext, authReducer} from "@/auth/context";
import {types} from "@/auth/types/types.js";

const initialState = {
  logged: false,
}

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  return {
    logged: !!user,
    user: user
  }
}

export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, initialState, init);

  const login = (name = '') => {
    const user = { id: 1, name}

    const action = {
      type: types.login,
      payload: user
    }
    localStorage.setItem('user', JSON.stringify(user))
    dispatch(action);
  }

  const logout = () => {
    const action = {
      type: types.logout
    }
    localStorage.removeItem('user')
    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{...state, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}
