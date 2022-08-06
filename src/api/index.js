
  const apiKey = import.meta.env.VITE_APIKEY
  const hash = import.meta.env.VITE_HASH
  const ts = import.meta.env.VITE_TS
  const baseUrl = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}`

  export const getHeroes = async () => {
    const response = await fetch(baseUrl)
    const data = await response.json()
    return data.data.results
  }
