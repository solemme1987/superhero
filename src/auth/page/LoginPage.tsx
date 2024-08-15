import { EnterButton } from "../../components"


export const LoginPage = () => {
  return (
    <>
      <section className="c-home-page">
        <img className="c-home-page__float-img" src="./assets/images/spiderman.png " alt="spiderman" />
        <div className="c-home-page__imgbox">
          <img className="c-home-page__img" src="./assets/images/dc-background.png " alt="dc homescreen background" />
        </div>
        <div className="c-home-page__title-box">
          <h1 className="c-home-page__title c-heading c-heading--l1 u-color-white">Create Your own Team of Superheroes</h1>
          <EnterButton />
        </div>
      </section>
    </>
  )
}
