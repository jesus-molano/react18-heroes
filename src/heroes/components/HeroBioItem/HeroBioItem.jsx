import './hero-bio-item.css'

export const HeroBioItem = ({label, data}) => {

  // join a space between camelcase string
  const joinSpace = (str) => {
    return str.replace(/([A-Z])/g, ' $1').toLowerCase()
  }
  label = joinSpace(label)

  return (
    <div className={`${label} hero-bio-info`}>
      <strong>{label}: </strong>
      {
        (label === 'weight' || label === 'height')
          ? <small className="text-muted">{data[1]}</small>
          : Array.isArray(data)
            ? <small className="text-muted">{data.join(', ')} </small>
            : <small className="text-muted" >{data}</small>
      }
    </div>
  )
}
