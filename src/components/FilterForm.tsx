import { FormEvent, useEffect, useState } from "react"
import { useForm } from "../shared/hooks/useForm"
import { getHeroByFilters } from "../heroes/helpers/getHerosByFilter"
import { Superhero } from "../shared/types"
import { DoubleRange } from "./DoubleRange"
import { useDispatch } from "react-redux"
import { addHerosFound, cleanSearch } from "../redux-toolkit/hero/teamHeroSlice"

type StatsRange = string[];

const initialForm = {
  keyword: '',
  gender: '',
  alignment: '',
  powerstats: '',
  test: '',
  /* intelligenceMin: '',
  intelligenceMax: '',
  combatMin: '',
  combatMax: '',
  speedMin: '',
  speedMax: '',
  strengthMin: '',
  strengthMax: '',
  durabilityMin: '',
  durabilityMax: '',
  powerMin: '',
  powerMax: '', */
}

const powestatsList: string[] = ['intelligence', 'strength', 'speed', 'durability', 'power', 'combat',]

export const FilterForm = () => {

  const dispatch = useDispatch();

  const {
    keyword,
    gender,
    alignment,
    powerstats,
    onInputChange,
    formState,
    onResetForm,
    /* intelligenceMin ,
    intelligenceMax,
    combatMin,
    combatMax,
    speedMin,
    speedMax,
    strengthMin,
    strengthMax,
    durabilityMin,
    durabilityMax,
    powerMin,
    powerMax, */

  } = useForm(initialForm)

  const [statsRange, setStatsRange] = useState<StatsRange>([])

  const onSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const herosFound: Superhero[] = getHeroByFilters(formState)
    dispatch(addHerosFound(herosFound))
  }


  const onClearFilters = (): void => {
    onResetForm()
    setStatsRange([])
    dispatch(cleanSearch())
  }


  useEffect(() => {
    if (powerstats && powerstats !== "") {
      !statsRange.includes(powerstats) && setStatsRange(prevStatsRange => [...prevStatsRange, powerstats]); 
    }
  }, [powerstats])


  return (
    <div className="c-filter">
      <form className="c-form" onSubmit={onSearchSubmit} >
        <button
          className="c-type c-type--sm u-color-black c-button c-button--bare"
          type="reset"
          onClick={onClearFilters}
        >
          <img src="../assets/icons/closeModal.svg" alt="reset icon" aria-hidden="true" />
          Clear Filters
        </button>

        <div className="c-form__group">
          <label className="c-type c-type--sm" htmlFor="keyword"> keyword</label>
          <input
            className="c-type c-type--sm"
            type="text" id="keyword"
            placeholder="Keyword"
            name="keyword"
            value={keyword}
            onChange={onInputChange}
          />
        </div>

        <div className="c-form__group c-form__group--select">
          <label className="c-type c-type--sm" htmlFor="gender"> Gender</label>
          <select
            className="c-type c-type--sm"
            id="gender"
            name="gender"
            value={gender}
            onChange={onInputChange}
          >
            <option value="" disabled >Select Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </div>

        <div className="c-form__group c-form__group--select">
          <label className="c-type c-type--sm" htmlFor="alignment"> Alignment</label>
          <select
            className="c-type c-type--sm"
            name="alignment"
            id="alignment"
            value={alignment}
            onChange={onInputChange}
          >
            <option value="" >Select Alignment</option>
            <option value="good">Good</option>
            <option value="bad">Bad</option>
          </select>
        </div>

        <div className="c-form__group c-form__group--select">
          <label className="c-type c-type--sm" htmlFor="powerstats"> Powerstats</label>
          <select
            className="c-type c-type--sm"
            id="powerstats"
            name="powerstats"
            value={powerstats}
            onChange={onInputChange}
          >
            <option value="" >Add stat</option>
            {
              powestatsList.map((stat) => (
                <option key={stat} value={stat}>{stat}</option>
              ))
            }
          </select>
        </div>

        <button className="c-button c-button--secondary">Submit Filters</button>

        <div className="c-form__range-group">
          {
            statsRange && powerstats
            &&
            statsRange.map((stat) => (
              <DoubleRange key={stat} rangeName={stat} callBack={ onInputChange} />
            ))
          }
        </div>

      </form>
    </div>

  )
}
