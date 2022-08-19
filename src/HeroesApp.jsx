import AppRouter from "./router/AppRouter.jsx";
import {HeroesProvider} from "@/heroes";
import {AuthProvider} from "@/auth";

const HeroesApp = () => {
  return (
    <AuthProvider>
      <HeroesProvider>
        <AppRouter/>
      </HeroesProvider>
    </AuthProvider>
)
  ;
};

export default HeroesApp;
