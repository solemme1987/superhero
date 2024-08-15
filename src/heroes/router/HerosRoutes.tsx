import {  SearchPage, HeroPage, ErrorPage, StyleguidePage } from "../page";
import { TeamPage } from "../page/TeamPage";

export const childHeroesRoutes = [ 
  {
    path: "/search",
    element: <SearchPage />
  },
  {
    path: "/my-team",
    element: <TeamPage />
  },
  {
    path: "/hero/:id",
    element: <HeroPage />,
    errorElement:<ErrorPage/>
    
  },
  {
    path: "/styleguide",
    element: <StyleguidePage />
  },
  {
    path: "*",
    element: <ErrorPage />
  },

]