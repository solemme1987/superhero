import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"
import { RootState } from "../redux-toolkit/store"
import { openFilter, openMenu } from "../redux-toolkit/toogle/toggleSlice"
import { FilterForm, NavbarItem } from "./"
import { NavbarLink } from "../shared/types/nabvarItem"

const menuItems: NavbarLink[] = [
  {
    title: 'Superheroes',
    path: 'search'
  },
  {
    title: 'My Team',
    path: 'my-team'
  },
  {
    title: 'Styleguide',
    path: 'styleguide'
  },
]

export const Navbar = () => {

  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const { isOpenMenu, isOpenFilter } = useSelector((state: RootState) => state.toggle)
  
  const onToggleMenu = (): void => {
    dispatch(openMenu())
  }

  const onToggleFilter = (): void =>{
    dispatch(openFilter())
  }
  
  return (
    <header className={`c-header ${isOpenMenu ? 'active' : ''} 
                                 ${(isOpenFilter && pathname === '/search') ? 'isOpenFilter' : ''} 
                      `}>

      <nav className={`c-nav ${isOpenMenu ? 'active' : ''} `}>
        <button
          onClick={onToggleMenu}
          className="c-nav__menu-toggle c-button c-button--bare"
          aria-label="Toggle Menu">
        </button>

        <h1 className="c-heading c-heading--l3">
          <Link
            className="c-nav__brand  u-color-black"
            to="/">
            supersearch
          </Link>
        </h1>

        <ul className="c-nav__menu">
          {
            menuItems.map(({ title, path }) => (
              <NavbarItem
                key={title}
                title={title}
                path={path} />
            ))
          }
        </ul>

        {
          (pathname === '/search')
            ?
            <button
            onClick={ onToggleFilter }
              className="c-nav__btn-filters c-button c-button--outline"
            >
              <span>Filters</span>
            </button>
            :
            ''
        }
      </nav>

      {
        (isOpenFilter && pathname === '/search')
        &&
        <FilterForm />
      }

      
    </header>
  )
}
