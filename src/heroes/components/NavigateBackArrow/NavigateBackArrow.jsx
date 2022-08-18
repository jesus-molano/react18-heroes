import './navigate-back-arrow.css'

export const NavigateBackArrow = ({onNavigateBack}) => {
  return (
    <button className="back-arrow bg-light" onClick={onNavigateBack}>
      <i className="bi bi-arrow-left-circle-fill"></i>
    </button>

  )
}
