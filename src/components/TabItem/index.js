// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, getActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const tabStyleChange = isActive ? 'act-btn' : ''

  const onActiveTab = () => {
    getActiveTabId(tabId)
  }

  return (
    <li className="Tab-item-container">
      <button
        className={`button ${tabStyleChange}`}
        type="button"
        onClick={onActiveTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
