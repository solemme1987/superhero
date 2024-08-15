
import { SuperHeroes } from "../data/heroes"

export const getHeroById = (id: string) => {
  return SuperHeroes.find(heroe => heroe.id === id)
}
