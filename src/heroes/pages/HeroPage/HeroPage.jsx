import {Navigate, useNavigate, useParams} from "react-router-dom";
import {getHeroBySlug} from "@/heroes/helpers";
import {HeroStats, HeroInfo, NavigateBackArrow} from "@/heroes/components";

export const HeroPage = () => {
  const {slug} = useParams()
  const hero = getHeroBySlug(slug)
  const navigate = useNavigate()

  const onNavigateBack = () => navigate(-1)

  if (!hero) return <Navigate to='/marvel'/>
  const {name, powerstats, biography, appearance, work, images} = hero

  return (
    <div className="position-relative">
      <h1 className="text-center mt-3">{name}</h1>
      <hr/>
      <div className="container-sm d-flex flex-column justify-content-center align-items-center ">
        <HeroInfo biography={biography} appearance={appearance} work={work} image={images.md}/>
        <HeroStats powerstats={powerstats} publisher={biography.publisher}/>
      </div>
      <NavigateBackArrow onNavigateBack={onNavigateBack}/>
    </div>
  )
}
