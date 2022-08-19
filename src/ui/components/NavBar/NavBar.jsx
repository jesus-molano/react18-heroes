import {Link, NavLink, useNavigate} from "react-router-dom"
import {NavItem} from "../"
import './navbar.css';

export const NavBar = () => {

  const navigate = useNavigate()
  const onLogout = () => {
    navigate('/login', {
      replace: true
    })
  }

  return (
    <nav className="navbar navbar-dark navbar-expand-sm bg-dark pe-2 d-flex align-items-center">
      <div className="container-fluid">
        <Link className="navbar-brand fs-2" to="/">Comics Database</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav fs-4 w-100 d-flex justify-content-between me-3">
            <li className="publishers d-sm-flex">
              <NavItem route="marvel"/>
              <NavItem route="dc"/>
            </li>
            <NavLink to='/search' className='d-flex align-items-center' >
              <i className='bi-search fs-2 text-light'></i>
            </NavLink>
          </ul>
          <div className="navbar-collapse collapse order-3 dual-collapse2 d-flex justify-content-end">
            <div className="navbar-nav ml-auto d-flex fs-6">
              <span className="nav-item nav-link text-info">User</span>
              <button className="nav-item nav-link btn text-secondary p-1 pe-2" onClick={onLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
