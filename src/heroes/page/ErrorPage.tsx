import { Link } from "react-router-dom"


export const ErrorPage = () => {
  return (
    <section className="o-container">
      <div className="c-error-page">

      <h2 className="c-heading c-heading--l1"> Error 404 page not found</h2>

      <p className="c-type c-type--lg">The url you are looking for does not exist </p>

      <Link className="c-heading c-heading--l1 c-button" to={'/search'} >
        Back to Home page
      </Link>
      </div>

    </section>
  )
}
