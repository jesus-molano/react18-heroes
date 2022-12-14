import {useContext} from "react";
import {HeroesContext} from "@/heroes/context/index.js"


export const getHeroBySlug = (slug) => {
  const heroes = useContext(HeroesContext);
  if(!heroes) return undefined;
  return heroes.find(hero => hero.slug === slug);
}
