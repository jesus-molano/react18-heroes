import React, {useEffect, useState} from 'react';
import {getHeroes} from "../../api/index.js";
import HeroItem from "../HeroItem/HeroItem.jsx";

const HeroesList = () => {
  const [heroes, setHeroes] = useState();

  useEffect(() => {
    getHeroes().then(data => {
      setHeroes(data);
    }).catch(err => {
      setHeroes([])
    });
  },[])

  return (
    <div>
      <ul>
        {heroes && heroes.map(
          hero => <HeroItem hero={hero} key={hero.id} />
        )}
      </ul>
    </div>
  );
};

export default HeroesList;
