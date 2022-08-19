import {useContext} from 'react';
import {HeroItem} from "../";
import {HeroesContext} from "@/heroes/context/index.js";
import './hero-list.css';

export const HeroesList = ({publisher}) => {

  const heroes = useContext(HeroesContext);

  return (
    <div className="heroes-container">
      <ul className="heroes-list">
        {heroes && heroes.map(hero => (
            hero.biography.publisher === publisher && <HeroItem key={hero.id} hero={hero}/>
        ))}
      </ul>
    </div>
  );
};

