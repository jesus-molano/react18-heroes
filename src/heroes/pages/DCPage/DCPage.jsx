import {HeroesList} from "@/heroes/components";

export const DCPage = () => {
  return (
    <div>
      <h1 className="text-center text-primary mt-4">DC</h1>
      <hr/>
      <HeroesList publisher="DC Comics"/>
    </div>
  );
};

