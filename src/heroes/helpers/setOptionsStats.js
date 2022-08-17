
export const setOptionsStats = () => {
  return {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'POWER STATS',
      },
    },
  };
}
