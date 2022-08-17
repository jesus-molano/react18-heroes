import './navigate-back-arrow.css'

export const NavigateBackArrow = ({onNavigateBack}) => {
  return (
    <button className="back-arrow" onClick={onNavigateBack}>
      <i className="bi bi-arrow-left-circle-fill"></i>
    </button>

  )
}
