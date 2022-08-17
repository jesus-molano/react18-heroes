
export const setDataStats = (powerstats, publisher) => {
  const labels = Object.keys(powerstats);

  const color = {
    'DC Comics': '#1970FD',
    'Marvel Comics': '#EE171F',
  }

  return {
    labels,
    datasets: [
      {
        label: '',
        data: labels.map((stat) => powerstats[stat]),
        borderColor: color[publisher] || 'rgb(14,191,218)',
        backgroundColor: color[publisher] + 'a0' || 'rgb(14,191,218, 0.5)',
      },
    ]
  }

}
