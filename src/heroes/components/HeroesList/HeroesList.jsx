import {useEffect, useState} from 'react';
import {getHeroes} from "../../api/index.js";
import {HeroItem} from "../";
import './hero-list.css';

export const HeroesList = ({publisher}) => {
  const [heroes, setHeroes] = useState();

  useEffect(() => {
    getHeroes().then(data => {
      setHeroes(data);
    }).catch(err => {
      setHeroes([])
    });
  }, [])

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

