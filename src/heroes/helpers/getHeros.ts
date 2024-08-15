import { useEffect, useState } from "react"
import { Superhero } from "../../shared/types"
import { useSelector } from "react-redux"
import { RootState } from "../../redux-toolkit/store"

export const getHeroes = (): Superhero[] => {

  const { superHeroes,search } = useSelector((state: RootState) => state.teamHero)

  const [initialHeros, setInitialHeros] = useState<Superhero[]>(superHeroes)
  const [heroesArray, setHeroesArray] = useState<Superhero[]>(initialHeros.slice(0, 8))
  const [index, setIndex] = useState<number>(8)

  const loadMore = (): void => {
    const newIndex = index + 8;
    setHeroesArray([...heroesArray, ...initialHeros.slice(index, newIndex)])
    setIndex(newIndex)
  }
  
  useEffect(() => {
    if(search.length > 0){
      setInitialHeros(search);
      setHeroesArray(search.slice(0, 8))
      setIndex(8);

    }else{
      setHeroesArray(initialHeros.slice(0, 8))
    }
    
  }, [search])
  

  useEffect(() => {

    const handleScrolling = (): void => {
      const scroll = document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scroll + windowHeight >= documentHeight) {
        loadMore()
      }
    }

    window.addEventListener('scroll', handleScrolling)

    return () => {
      window.removeEventListener('scroll', handleScrolling)
    }

  }, [index,initialHeros])

  return heroesArray
}