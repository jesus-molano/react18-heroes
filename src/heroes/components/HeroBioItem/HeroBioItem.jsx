import './hero-bio-item.css'

export const HeroBioItem = ({label, data}) => {
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
