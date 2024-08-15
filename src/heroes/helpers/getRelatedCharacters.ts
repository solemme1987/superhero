import { Superhero } from "../../shared/types"
import { SuperHeroes } from "../data/heroes";


export const getRelatedCharacters = (aligment: string, publisher: string): Superhero[] => {
  
  const relatedCharacters: Superhero[] = SuperHeroes
    .filter(hero => hero.biography.alignment == aligment && hero.biography.publisher == publisher)
    .sort(() => Math.random() - 0.5)
    .slice(0, 6)

  return relatedCharacters;
}
