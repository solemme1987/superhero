import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../auth/page/LoginPage";
import { childHeroesRoutes } from "../heroes/router/HerosRoutes";
import { App } from "../App"

export const AppRouter = () => {
 

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      /* path: "", */
      element: <App/>,
      children: childHeroesRoutes
    },
    
  ])


  return (
    <RouterProvider router={router} />
  )
}
