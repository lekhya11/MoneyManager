import './index.css'
import MoneyDetails from '../MoneyDetails'

const MoneyManager = () => (
  <div className="money-container">
    <div className="person-details">
      <h1 className="main-heading">HI, Richard</h1>
      <p className="paragraph">
        Welcome back to you <span className="highLight"> Money Manager</span>
      </p>
    </div>
    <MoneyDetails />
    <div className="bottom-container">
      <div className="form-container">
        <h1 className="heading">Add Transaction</h1>
        <form>
          <label htmlFor="title">TITLE</label>
          <input type="text" id="title" className="input" />
          <label htmlFor="amount">AMOUNT</label>
          <input type="text" id="amount" className="input" />
          <label htmlFor="select">TYPE</label>
          <select id="select">
            <option>Income</option>
            <option>Expenses</option>
          </select>
        </form>
      </div>
      <div className="history-container">
        <h1 className="heading">History</h1>
      </div>
    </div>
  </div>
)

export default MoneyManager
