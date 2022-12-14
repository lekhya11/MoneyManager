import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="money-details">
      <div className="balances">
        <button className="button" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="icon"
          />
        </button>
        <div>
          <p className="para-balance">Your Balance</p>
          <p className="amount" testid="balanceAmount">RS {balanceAmount}</p>
        </div>
      </div>
      <div className="balances bg-blue">
        <button className="button btn-blue" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="icon"
          />
        </button>
        <div>
          <p className="para-balance">Your Income</p>
          <p className="amount" testId="incomeAmount">RS {incomeAmount}</p>
        </div>
      </div>
      <div className="balances bg-violet">
        <button className="button btn-violet" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="icon"
          />
        </button>
        <div>
          <p className="para-balance">Your Expenses</p>
          <p className="amount"  testId="expensesAmount">RS {expensesAmount}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
