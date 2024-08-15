import { Link } from "react-router-dom";

type Props = {
  id: string;
  name: string;
  imgUrl: string;
}
export const Avatar = ({ id, name, imgUrl }: Props) => {
  return (
    <div>
      <div className="c-styleguide__btn-group ">
        <article className="c-styleguide__component-box">
          <Link
            className="c-avatar"
            to={`/hero/${id}`}>
            <img className="c-avatar__img" src={ imgUrl } alt={ name } />
          </Link>
        </article>
      </div>
    </div>
  )
}
