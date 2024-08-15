import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { RootState } from "../../redux-toolkit/store"
import { HeroCard } from "../components"
import { useEffect } from "react"

export const TeamPage = () => {

  const { team } = useSelector((state: RootState) => state.teamHero)

  useEffect(() => {
    if (team.length === 0){
      localStorage.setItem("teamHeroState", JSON.stringify({ alignment: '', team: [] }));
    }
  }, [team])

  return (

    <section className="o-container o-container--myTeam ">

      {
        team.length === 0
          ?
          <>
            <p className="c-type c-type--lg">
              You do not have any team members selected. Please make selections on
            </p>
            <Link to='/search' className="c-type c-type--lg u-color-blue"> superheros page.</Link>
          </>
          :
          <div className="o-grid">
            {
              team.map((hero) => (
                <HeroCard key={hero.id} hero={hero} />
              ))
            }
          </div>

      }

    </section>

  )
}
