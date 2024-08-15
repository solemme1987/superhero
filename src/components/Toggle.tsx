import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHeroById } from "../heroes/helpers";
import { addHero, removeHero } from "../redux-toolkit/hero/teamHeroSlice";
import { RootState } from "../redux-toolkit/store";
import { openModal } from "../redux-toolkit/alerts/alertSlice";

interface Props {
  id: string;
}

export const Toggle = ({ id }: Props) => {

  const dispatch = useDispatch()
  const [isChecked, setisChecked] = useState<boolean>(false)
  const { alignment, team } = useSelector((state: RootState) => state.teamHero)

  useEffect(() => {

    if (team.length >= 0) {
      team.some(item => item.id === id)
        ? setisChecked(true)
        : setisChecked(false)
      localStorage.setItem("teamHeroState", JSON.stringify({ alignment, team}));
    }
    
  }, [team])

  const onChangeToggle = (event: ChangeEvent<HTMLInputElement>): void => {

    const checked: boolean = event.target.checked

    if (team.length === 8 && checked) {
      const title:string = 'Oops! You have too many team members';
      const message: string ='You may only select 8 team members at a time.';
      dispatch( openModal({title, message}))
      return;
    }

    if (checked) {
      const hero = getHeroById(id)
      const alignmentHero = hero?.biography.alignment

      if (team.length > 0 && alignment !== alignmentHero) {

        const title: string = `Oops! Your team started with heroes of ${alignment} alignment`;
        const message: string = `you cannot add members with ${hero?.biography.alignment} alignment to the team.`;
        dispatch(openModal({ title, message }))
        return;

      } else {
        dispatch(addHero({ alignmentHero, hero }))
      }

    } else if (!checked) {

      setisChecked(false)
      dispatch(removeHero(id))

    }
  }

  return (
    
    <fieldset className="c-toggle" >
      <legend></legend>
      <input
        onChange={onChangeToggle}
        checked={isChecked}
        className="c-form c-toggle__check"
        type="checkbox" name="togle"
        id={id} />
      <label htmlFor={id.toString()} className="c-toggle__label" aria-label="toggle-card"></label>
    </fieldset>
  )
}
