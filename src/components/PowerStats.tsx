import { Powerstats } from '../shared/types'

type Props = {
  powerStatus: Powerstats
}
export const PowerStats = ({ powerStatus }: Props) => {

  return (
    <ul className="c-card__list-skills">
      {
        Object.entries(powerStatus).map(([key, value]) => (
          <li className="c-card__skill" key={key}>
            <p className="c-heading cheading--l3 u-color-white"> {key}: {value} </p>
          </li>
        ))
      }
    </ul>

  )
}
