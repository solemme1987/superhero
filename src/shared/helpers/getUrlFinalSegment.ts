import { useLocation } from "react-router-dom";


export const getUrlFinalSegment = (): string => {

  const { pathname } = useLocation()
  const splitPathname: string[] = pathname.split('/')

  const finalSegment: string = splitPathname[splitPathname.length - 1]

  return finalSegment;
}
