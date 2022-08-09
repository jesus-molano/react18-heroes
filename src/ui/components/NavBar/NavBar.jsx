import {Link, useNavigate} from "react-router-dom"
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
          <ul className="navbar-nav fs-4">
            <NavItem publisher="marvel"/>
            <NavItem publisher="dc"/>
          </ul>
          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
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
