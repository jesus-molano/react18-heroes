import React from 'react'
import {getHeroByName, HeroItem} from "@/heroes";
import {useForm} from "@/hooks/useForm.js";
import {useLocation, useNavigate} from "react-router-dom";
import queryString from "query-string"

export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const { q = '' } = queryString.parse(location.search)
  const heroes = getHeroByName(q)

  const showSearch = q.length === 0
  const showError = q.length > 0 && heroes?.length === 0

  const {searchText, onInputChange} = useForm({
    searchText: q
  })

  const onSearchSubmit = (e) => {
    e.preventDefault()
    navigate(`?q=${searchText.toLowerCase().trim()}`)
  }

  return (
    <>
      <h1 className="mt-4 text-center">Search</h1>
      <hr/>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <h4>Searching</h4>
            <form className="d-flex flex-column" onSubmit={onSearchSubmit}>
              <input
                type="text"
                placeholder="Search a hero"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={onInputChange}
              />
              <button className="btn btn-outline-primary mt-1">Search</button>
            </form>
          </div>
          <div className="col-7">
            <h4>Results</h4>
            <div className="alert alert-info" style={{display: showSearch ? '' : 'none'}}>
              Search a hero
            </div>
            <div className="alert alert-danger" style={{display: showError ? '' : "none"}}>
              No hero with name <strong>{q}</strong> found
            </div>
            {
              heroes?.length > 0 && (
                <div className="heroes-container">
                  <ul className="heroes-list d-flex-sm p-0 align-items-center justify-content-center">
                    {heroes.map(hero => (
                      <HeroItem key={hero.id} hero={hero}/>
                    ))}
                  </ul>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}
