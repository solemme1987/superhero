import { Outlet, useLocation } from "react-router-dom"
import { Modal, Navbar } from "./components"
import { useDispatch, useSelector } from "react-redux"
import { openFilter } from "./redux-toolkit/toogle/toggleSlice";
import { RootState } from "./redux-toolkit/store";
import { useEffect } from "react";
import { cleanSearch } from "./redux-toolkit/hero/teamHeroSlice";

export function App() {

  const dispatch = useDispatch();
  const { pathname } = useLocation()
  const { isOpenFilter } = useSelector((state: RootState) => state.toggle)
  const { isOpen } = useSelector((state: RootState) => state.alert)

  useEffect(() => {
    if (pathname !== '/search' && isOpenFilter) {
      dispatch(openFilter())
      dispatch(cleanSearch())
    }
    
  }, [pathname])



  return (

    <>
      <Navbar />
      <Outlet />
      
      {
       isOpen &&
       <Modal />
      }
      
    </>
  )
}


