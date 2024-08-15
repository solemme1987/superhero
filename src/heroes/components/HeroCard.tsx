import { useState } from "react"
import { Toggle } from "../../components/Toggle";
import { Superhero } from "../../shared/types";
import { PowerStats } from "../../components";
import { Link } from "react-router-dom";

type Props = {
  hero: Superhero;
  variant?: string
}

export const HeroCard = ({ hero, variant= '' }: Props) => {

  const [isActive, setIsActive] = useState<boolean>(false)

  const onExpandCard = (): void => {
    setIsActive(!isActive);
  }

  return (
    <>
      <article
        className={`c-card ${isActive ? 'isActive' : ''} ${variant} `} >
        <Link to={`/hero/${hero.id}`} aria-label={`Open ${hero.name}`}>
          <img src={hero.image.url} alt={`${hero.name}${hero.id}`} className="c-card__bgImg" />
        </Link>
        <div className={`c-card__body ${variant}`}>
          <h2 className="c-card__name c-heading c-heading--l2 u-color-white">{hero.name}</h2>

          <div className="c-card__toggle-box">
            <p className="c-type c-type--sm u-color-white">Add to Team</p>
            <Toggle id={hero.id} /* isChecked={ isChecked } *//>
          </div>

          <PowerStats powerStatus={hero.powerstats} />
        </div>
        
        <button
          onClick={onExpandCard}
          className={`c-card__btn ${isActive ? 'isActive' : ''}`}
          aria-label="open list skill"
        ></button>
      </article>
    </>
  )
}
