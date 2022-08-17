const baseUrl = 'https://akabab.github.io/superhero-api/api/all.json'

  export const getHeroes = async () => {
      const response = await fetch(baseUrl)
      const data = await response.json()
      return data
  }
