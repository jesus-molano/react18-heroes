import './hero-item.css'
const HeroItem = ({hero}) => {
  const {name, description, thumbnail} = hero;
  return (
    <li className="hero-card">
      <p className="hero-name">{name}</p>
      <p className="hero-description">{description}</p>
      <img src={thumbnail.path + '.' + thumbnail.extension} alt={name}/>
    </li>
  );
};

export default HeroItem;
