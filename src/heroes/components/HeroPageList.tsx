
type Props = {
  data: Record<string, any>;
  variant?: string;
};


export const HeroPageList = ({ data = {}, variant = '' }: Props) => {
  return (
    <ul className={`c-hero-page__list ${variant}`}>
      {
        Object.entries(data).map(([key, value]) => (
          <li className="c-hero-page__item" key={key}>
            <p className="c-type c-type--sm"><strong>{key}: </strong> {value}</p>
          </li>
        ))
      }
    </ul>
  )
}
