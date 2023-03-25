// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isTabClicked, isActive} = props
  const {displayText, tabId} = tabDetails

  const isClicked = () => {
    isTabClicked(tabId)
  }

  const classNameId = isActive ? 'buttonEl' : ''

  return (
    <li className="list-container">
      <button
        onClick={isClicked}
        type="button"
        className={`button ${classNameId}`}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
