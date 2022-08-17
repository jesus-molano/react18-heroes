import {useEffect, useState} from 'react'
import {getHeroes} from "../heroes/apis/superHeroApi.js";
import {HeroesContext} from "./HeroesContext";

export const HeroesProvider = ({children}) => {

  const [heroes, setHeroes] = useState();

  useEffect(() => {
    getHeroes()
      .then(data => {
        setHeroes(data);
      })
      .catch(() => {
        setHeroes([])
      });
  }, [])


  return (
    <HeroesContext.Provider value={heroes}>
      {children}
    </HeroesContext.Provider>
  )
}
