import { Button, Stack } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import AddBudgetModal from "./components/AddBudgetModal"
import AddExpenseModal from "./components/AddExpenseModal"
import ViewExpensesModal from "./components/ViewExpensesModal"
import BudgetCard from "./components/BudgetCard"
import UncategorizedBudgetCard from "./components/UncategorizedBudgetCard"
import TotalBudgetCard from "./components/TotalBudgetCard"
import { useState } from "react"
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "./contexts/BudgetsContext"
import Element from "./components/Element"

function App() {

  


  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState()
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState()
  const { budgets, getBudgetExpenses } = useBudgets()

  function openAddExpenseModal(budgetId) {
    setShowAddExpenseModal(true)
    setAddExpenseModalBudgetId(budgetId)
  }


return (
  <Element 
  showAddBudgetModal={showAddBudgetModal}
  showAddExpenseModal={showAddExpenseModal}
  viewExpensesModalBudgetId={viewExpensesModalBudgetId}
  addExpenseModalBudgetId={addExpenseModalBudgetId}
  budgets={budgets}
  getBudgetExpenses={getBudgetExpenses}
  openAddExpenseModal={openAddExpenseModal}
  setShowAddBudgetModal={setShowAddBudgetModal}
  setShowAddExpenseModal={setShowAddExpenseModal}
  setViewExpensesModalBudgetId={setViewExpensesModalBudgetId}
  setAddExpenseModalBudgetId={setAddExpenseModalBudgetId}

  />
)

}

export default App


