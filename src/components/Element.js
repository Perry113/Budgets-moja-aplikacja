import { Button, Stack } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import AddBudgetModal from "./AddBudgetModal"
import AddExpenseModal from "./AddExpenseModal"
import ViewExpensesModal from "./ViewExpensesModal"
import BudgetCard from "./BudgetCard"
import UncategorizedBudgetCard from "./UncategorizedBudgetCard"
import TotalBudgetCard from "./TotalBudgetCard"
import { useState } from "react"
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../contexts/BudgetsContext"

const Element = (props) => {

  
    return (
    
        <>
         <Container className="my-4">
           <Stack direction="horizontal" gap="2" className="mb-4">
            <h1 className="me-auto">Budgets</h1>
           <Button variant="primary" onClick={() => props.setShowAddBudgetModal(true)} className="ms-auto">
           Add Budget
           </Button>
         <Button variant="outline-primary" onClick={props.openAddExpenseModal} className="ms-auto">
           Add Expense
           </Button>
           </Stack>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              {props.budgets.map(budget => {
                const amount = props.getBudgetExpenses(budget.id).reduce(
                  (total, expense) => total + expense.amount,
                  0
                )
                return (
                  <BudgetCard
                    key={budget.id}
                    name={budget.name}
                    amount={amount}
                    max={budget.max}
                    onAddExpenseClick={() => props.openAddExpenseModal(budget.id)}
                    onViewExpensesClick={() =>
                        props.setViewExpensesModalBudgetId(budget.id)
                    }
                  />
                )
              })}
              <UncategorizedBudgetCard
                onAddExpenseClick={props.openAddExpenseModal}
                onViewExpensesClick={() =>
                    props.setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)
                }
              />
              <TotalBudgetCard />
            </div>
          </Container>
          <AddBudgetModal
            show={props.showAddBudgetModal}
            handleClose={() => props.setShowAddBudgetModal(false)}
          />
    
          <AddExpenseModal
            show={props.showAddExpenseModal}
            defaultBudgetId={props.addExpenseModalBudgetId}
            handleClose={() => props.setShowAddExpenseModal(false)}
          />
    
        <ViewExpensesModal
         budgetId={props.viewExpensesModalBudgetId}
         handleClose={() => props.setViewExpensesModalBudgetId()} 
        />
      </>
      )
    }



  


export default Element