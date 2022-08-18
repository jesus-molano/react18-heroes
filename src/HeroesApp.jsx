import AppRouter from "./router/AppRouter.jsx";
import {HeroesProvider} from "@/context";

const HeroesApp = () => {
  return (
    <HeroesProvider>
      <AppRouter />
    </HeroesProvider>
  );
};

export default HeroesApp;
