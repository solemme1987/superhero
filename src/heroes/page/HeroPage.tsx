import { getHeroById, getRelatedCharacters } from "../helpers"
import { HeroCard, HeroPageList } from "../components"
import { Avatar } from "../../components"
import { Appearance, Biography, Powerstats, Superhero, Work } from "../../shared/types"
import { ErrorPage } from "./ErrorPage"
import { getUrlFinalSegment } from "../../shared/helpers/getUrlFinalSegment"
import { useParams } from "react-router-dom"

export const HeroPage = () => {


  /* 
     Para evitar todos los undefined, puedo hacer la validacion si el heroe existe antes return.
     de esta forma puedo quitar todos los undefined e interrogacion de las constantes
  */

  const heroId: string = getUrlFinalSegment() // para esto puedo usar tambien el useParam hook

  const {id} = useParams()
  console.log(id)

  const hero: Superhero | undefined = getHeroById(heroId)

  /* 
    aqui puedo manejar un new Error para react router y renderice el error element y evito agregarlo al final
    el  return y no tengo que hacer esa validacion.
  */

  const powerStats: Powerstats | undefined = hero?.powerstats;
  const appearance: Appearance | undefined = hero?.appearance;
  const biography: Biography | undefined = hero?.biography;
  const work: Work | undefined = hero?.work;

  const relatedCharacters = (hero) && getRelatedCharacters(hero?.biography.alignment, hero?.biography.publisher)


  return (
    <>
      {
        (hero)
          ?
          <section className="o-container o-container--hero">
            <div className="c-hero-page">
              <HeroCard hero={hero} variant="large" />

              <div className="c-hero-page__summary">

                <div className="c-hero-page__bio-row">

                  <div className="c-hero-page__bio-col">
                    <h2 className="c-heading c-heading--l2 c-hero-page__subtitle"> Powerstats </h2>
                    {powerStats && <HeroPageList data={powerStats} />}
                  </div>

                  <div className="c-hero-page__bio-col">
                    <h2 className="c-heading c-heading--l2 c-hero-page__subtitle"> Appearance </h2>
                    {appearance && <HeroPageList data={appearance} />}
                  </div>

                </div>

                <div className="c-hero-page__bio-row">
                  <div className="c-hero-page__bio-col">
                    <h2 className="c-heading c-heading--l2 c-hero-page__subtitle"> Biography </h2>
                    {biography && <HeroPageList data={biography} variant='initial' />}
                  </div>
                </div>

                <div className="c-hero-page__bio-row">
                  <div className="c-hero-page__bio-col">
                    <h2 className="c-heading c-heading--l2 c-hero-page__subtitle">Work </h2>
                    {work && <HeroPageList data={work} variant='initial' />}
                  </div>
                </div>

                <div className="c-hero-page__bio-row">
                  <div className="c-hero-page__bio-col">
                    <h2 className="c-heading c-heading--l2 c-hero-page__subtitle">Related Characters</h2>
                    <ul className="c-hero-page__list character">

                      {
                        relatedCharacters
                        &&
                        relatedCharacters.map((hero) => (
                          <li className="c-hero-page__item" key={hero.id}>
                            <Avatar id={hero.id} name={hero.name} imgUrl={hero.image.url} />
                          </li>

                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          :
          <ErrorPage />

      }
    </>
  )
}
