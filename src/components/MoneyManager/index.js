import './index.css'
import MoneyDetails from '../MoneyDetails'

const MoneyManager = () => (
  <div className="money-container">
    <div className="person-details">
      <h1 className="heading">HI, Richard</h1>
      <p className="paragraph">
        Welcome back to you <span className="highLight"> Money Manager</span>
      </p>
    </div>
    <MoneyDetails />
  </div>
)

export default MoneyManager
