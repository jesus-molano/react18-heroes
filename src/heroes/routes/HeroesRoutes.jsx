import {Navigate, Route, Routes} from "react-router-dom"
import {DCPage, MarvelPage, SearchPage, HeroPage} from "../pages"
import {NavBar} from "@/ui"

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/marvel"/>}/>
        <Route path="/marvel" element={<MarvelPage/>}/>
        <Route path="/dc" element={<DCPage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/hero/:slug" element={<HeroPage/>}/>
      </Routes>
    </>
  )
}
