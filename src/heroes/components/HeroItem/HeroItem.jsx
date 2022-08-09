import './hero-item.css'
export const HeroItem = ({hero}) => {
  const {name, images} = hero;
  return (
    <li className="hero-card">
      <p className="hero-name">{name}</p>
      <img src={images.md} alt={name}/>
    </li>
  );
};

