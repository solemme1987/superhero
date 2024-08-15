import { useSelector } from "react-redux";
import { Superhero } from "../../shared/types"
import { HeroCard } from "../components";
import { getHeroes } from "../helpers";
import { RootState } from "../../redux-toolkit/store";


export const SearchPage = () => {

  const heroes: Superhero[] =  getHeroes();
  const { isOpenFilter } = useSelector((state: RootState) => state.toggle)
  
  return (
    <section className={`o-container ${isOpenFilter ? 'isOpenFilter' : ''}`}>
      <div className="o-grid">
        {
          heroes.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))
        }
      </div>
    </section>
  )
}

