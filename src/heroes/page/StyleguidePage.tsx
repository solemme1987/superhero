import { Toggle } from "../../components"
import { Superhero } from "../../shared/types"
import { HeroCard } from "../components"

const hero: Superhero = {
  "id": "730",
  "name": "Zatanna",
  "powerstats": {
    "intelligence": "81",
    "strength": "10",
    "speed": "23",
    "durability": "28",
    "power": "100",
    "combat": "56"
  },
  "biography": {
    "fullName": "Zatanna Zatara",
    "alterEgos": "No alter egos found.",
    "aliases": ["-"],
    "placeOffBirth": "-",
    "firstAppearance": "Hawkman #4",
    "publisher": "DC Comics",
    "alignment": "good"
  },
  "appearance": {
    "gender": "Female",
    "race": "Human",
    "height": ["5'7", "170 cm"],
    "weight": ["127 lb", "57 kg"],
    "eyeColor": "Blue",
    "hairColor": "Black"
  },
  "work": {
    "occupation": "-",
    "base": "-"
  },
  "connections": {
    "groupAffiliation": "Misty Kilgore, Seven Soldiers of Victory, Justice League, Sentinels of Magic",
    "relatives": "Giovanni \"John\" Zatara (father, deceased), Sindella (mother, deceased), Leonardo da Vinci (paternal ancestor, deceased)"
  },
  "image": {
    "url": "https://www.superherodb.com/pictures2/portraits/10/100/809.jpg"
  }
}

export const StyleguidePage = () => {
  return (
    <>
      <section className="o-container o-container--styleguide c-styleguide">

        <h1 className="c-styleguide__title"> colors</h1>
        <div className="c-styleguide__color-group">

          <article className="c-styleguide__color-box">
            <div className="c-styleguide__color u-bg-black"></div>
            <span className="c-styleguide__color-name">#000000</span>
          </article>

          <article className="c-styleguide__color-box">
            <div className="c-styleguide__color u-bg-white"></div>
            <span className="c-styleguide__color-name">#FFFFFF</span>
          </article>

          <article className="c-styleguide__color-box">
            <div className="c-styleguide__color u-bg-blue"></div>
            <span className="c-styleguide__color-name">#0084FF</span>
          </article>

          <article className="c-styleguide__color-box">
            <div className="c-styleguide__color u-bg-orange"></div>
            <span className="c-styleguide__color-name">#EB6E1C</span>
          </article>

        </div>

        <h2 className="c-styleguide__title c-styleguide__title--nomargin">typography</h2>
        <div className="c-styleguide__group">
          <div className="c-styleguide__font-group">
            <div className="c-styleguide__font-typo">
              <h2 className="c-styleguide__font-obelix">AaBbCcDdEe</h2>
              <p className="c-styleguide__font-description"> Primary </p>
              <p className="c-styleguide__font-description"> Font Family: ObelixPro </p>
              <p className="c-styleguide__font-description"> Font Weight(s): Bold </p>
            </div>

            <div className="c-styleguide__font-typo">
              <h2 className="c-styleguide__font-roboto">AaBbCcDdEe</h2>
              <p className="c-styleguide__font-description"> Secondary </p>
              <p className="c-styleguide__font-description"> Font Family: Roboto </p>
              <p className="c-styleguide__font-description"> Font Weight(s): Regular, Bold </p>
            </div>
          </div>
        </div>

        <div className="c-styleguide__group">
          <div className="c-styleguide__font-group">
            <div className="c-styleguide__typo">
              <h2 className="c-styleguide__font-description is-heading"> HEADING 1 </h2>
              <p className="c-styleguide__font-description c-styleguide__font-description--styles"> Font Family: ObelixPro</p>
              <p className="c-styleguide__font-description c-styleguide__font-description--styles"> Font Weight(s): Bold </p>
              <p className="c-styleguide__font-description c-styleguide__font-description--styles"> Size: 20px </p>
              <p className="c-styleguide__font-description c-styleguide__font-description--styles"> Line-height: 35px</p>
            </div>

            <div className="c-styleguide__typo">
              <h2 className="c-heading c-heading--l2">The quick brown fox jumps over the lazy dog.</h2>
            </div>
          </div>
        </div>

        <div className="c-styleguide__group">
          <div className="c-styleguide__font-group">
            <div className="c-styleguide__typo">
              <h2 className="c-styleguide__font-description is-heading"> PARAGRAPH LARGE </h2>
              <p className="c-styleguide__font-description c-styleguide__font-description--styles"> Font Family: Roboto</p>
              <p className="c-styleguide__font-description c-styleguide__font-description--styles"> Font Weight(s): Regular, Bold</p>
              <p className="c-styleguide__font-description c-styleguide__font-description--styles"> Size: 18px</p>
              <p className="c-styleguide__font-description c-styleguide__font-description--styles"> Line-height: 24px</p>
            </div>

            <div className="c-styleguide__typo">
              <p className="c-type c-type--lg "><strong>The Quick Brown Fox Jumps</strong> Over The Lazy Dog. </p>
            </div>
          </div>
        </div>

        <div className="c-styleguide__group end-row">
          <div className="c-styleguide__font-group">
            <div className="c-styleguide__typo">
              <h2 className="c-styleguide__font-description is-heading"> PARAGRAPH SMALL </h2>
              <p className="c-styleguide__font-description c-styleguide__font-description--styles">Font Family: Roboto</p>
              <p className="c-styleguide__font-description c-styleguide__font-description--styles"> Font Weight(s): Regular, Bold</p>
              <p className="c-styleguide__font-description c-styleguide__font-description--styles">Size: 14px</p>
              <p className="c-styleguide__font-description c-styleguide__font-description--styles">Line-height: 22px</p>
            </div>

            <div className="c-styleguide__typo">
              <p className="c-type c-type--sm "><strong>The Quick Brown Fox Jumps</strong> Over The Lazy Dog. </p>
            </div>
          </div>
        </div>

        <h2 className="c-styleguide__title"> components </h2>
        <div className="c-styleguide__group no-border no-padding">
          <div className="c-styleguide__components-group ">

            {/* Buttons */}
            <div>
              <h2 className="c-styleguide__title small">buttons</h2>
              <div className="c-styleguide__btn-group">
                <article className="c-styleguide__component-box">
                  <button className="c-button c-button--primary">enter</button>
                  <span className="c-type c-type--lg">Primary</span>
                </article>

                <article className="c-styleguide__component-box align-end">
                  <button className="c-button c-button--secondary">submit filters</button>
                  <span className="c-type c-type--lg">Secundary</span>
                </article>

                <article className="c-styleguide__component-box align-end">
                  <button className="c-button c-button--outline">filters</button>
                  <span className="c-type c-type--lg">Outline</span>
                </article>
              </div>
            </div>

            {/* LINKS */}
            <div>
              <h2 className="c-styleguide__title small">links</h2>
              <div className="c-styleguide__btn-group ">
                <article className="c-styleguide__component-box">
                  <a className="c-link">my team</a>
                </article>
              </div>
            </div>

            {/* TOGGLE */}
            <div>
              <h2 className="c-styleguide__title small">Toggle</h2>
              <div className="c-styleguide__btn-group ">
                <article className="c-styleguide__component-box">
                  <Toggle id={`99999`}/>
                </article>
              </div>
            </div>

            {/* AVATAR */}
            <div>
              <h2 className="c-styleguide__title small">avatar</h2>
              <div className="c-styleguide__btn-group ">
                <article className="c-styleguide__component-box">
                  <a className="c-avatar" href="#">
                    <img className="c-avatar__img" src="https://www.superherodb.com/pictures2/portraits/10/100/13.jpg" alt="related charackter name" />
                  </a>
                </article>
              </div>
            </div>

          </div>
        </div>

        {/* CARD */}
        <div className="c-styleguide__group no-border ">
          <div className="c-styleguide__components-group ">
          <div>
              <h2 className="c-styleguide__title small">card</h2>
              <div className="c-styleguide__btn-group">
                <div className="c-styleguide__component-box">
                    <HeroCard hero = { hero }/>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section >



    </>
  )
}
