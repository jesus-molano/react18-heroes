import {HeroesList} from "@/heroes/components";

export const MarvelPage = () => {
  return (
    <div>
      <h1 className="text-center mt-4 text-danger">Marvel</h1>
      <hr/>
      <HeroesList publisher="Marvel Comics"/>
    </div>
  );
};

