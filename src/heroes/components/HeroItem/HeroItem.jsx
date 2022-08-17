import './hero-item.css'
import {Link} from "react-router-dom";

export const HeroItem = ({hero}) => {
  const {slug, name, images} = hero;
  return (
    <Link to={`/hero/${slug}`} className="hero-card">
      <p className="hero-name">{name}</p>
      <img src={images.md} alt={name} loading="lazy"/>
    </Link>
  );
};
