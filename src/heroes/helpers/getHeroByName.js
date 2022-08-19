import {useContext} from "react";
import {HeroesContext} from "@/heroes/context/index.js"


export const getHeroByName = (name = "") => {
  const heroes = useContext(HeroesContext);

  name = name.toLowerCase().trim()
  if (name === "") return [];
  if(!heroes) return undefined;
  return heroes.filter(hero => hero.name.toLowerCase().includes(name));
}
