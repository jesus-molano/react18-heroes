import {HeroBioItem} from "@/heroes/components/HeroBioItem/HeroBioItem";

export const HeroInfo = ({biography, appearance, work, image}) => {
  return (
    <div className="row p-2 rounded w-100 mb-3">
      <div className="col-md-6">
        <div className="biography mb-4">
          <h2 className="text-info">Biography</h2>
          {
            Object.keys(biography).map(bioItem => {
              return <HeroBioItem key={bioItem} label={bioItem} data={biography[bioItem]}/>
            })
          }
        </div>
        <div className="appearance mb-4">
          <h2 className="text-info">Appearance</h2>
          {
            Object.keys(appearance).map(appearanceItem => {
              return <HeroBioItem key={appearanceItem} label={appearanceItem} data={appearance[appearanceItem]}/>
            })
          }
        </div>
        <div className="work mb-4">
          <h2 className="text-info">Work</h2>
          <HeroBioItem label="Occupation" data={work.occupation}/>
        </div>

      </div>
      <div className="col-md-6 d-flex justify-content-center">
        <img src={image} alt="" className="img-fluid rounded"/>
      </div>
    </div>
  )
}
