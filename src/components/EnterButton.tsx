import { useNavigate } from "react-router-dom"


export const EnterButton = () => {

  const navigate = useNavigate();

  const onLogin = ():void =>{
    navigate('/search')
  }

  return (
    <button
      className="c-button c-button--primary"
      onClick={onLogin}
    >enter</button>
  )
}
