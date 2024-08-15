import { NavLink } from "react-router-dom"
import { NavbarLink } from "../shared/types/nabvarItem"
import { useDispatch } from "react-redux"
import { openMenu } from "../redux-toolkit/toogle/toggleSlice"

export const NavbarItem = ({path, title}: NavbarLink) => {


  const dispatch = useDispatch()

  const onToggleMenu = (): void => {
    dispatch(openMenu())
  }

  return (
    <li className="c-nav__item">
      <NavLink
        onClick={onToggleMenu}
        to={path}
        className={({ isActive }) => `c-link u-color-black ${isActive ? 'active' : ''}`}>
        {title}
      </NavLink>
    </li>
  )
}
