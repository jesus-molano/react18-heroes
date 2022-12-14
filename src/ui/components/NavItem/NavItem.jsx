import {NavLink, useLocation} from "react-router-dom";

export const NavItem = ({route}) => {

  const {pathname} = useLocation()

  return (
    <NavLink
      className={({isActive}) => (
        `nav-link nav-item ${isActive
          ? pathname.includes('marvel')
            ? 'text-danger active'
            : 'text-primary active'
          : ''}`
      )}
      to={`/${route}`}
    >
      {route}
    </NavLink>
  );
};

