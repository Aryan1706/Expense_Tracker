import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../Form/Form"
import ExpenseForm from "./ExpenseForm"
import IncomeItem from "../IncomeItem/IncomeItem";


function Expenses(){
    const {addIncome, expenses, getExpenses , deleteExpense, totalExpense } = useGlobalContext()

    useEffect(()=>{
        getExpenses()
    },[])

    return(
        <ExpensesStyled>
            <InnerLayout>
                <h1>Expenses</h1>
                <h2 className="total-income"> Total Expense : <span>Rs. {totalExpense()} </span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <ExpenseForm />
                    </div>
                        
                    <div className="incomes">
                        {expenses.map((income)=>{
                            const{_id, title, amount, date, category, description, type} = income;
                            return <IncomeItem 
                            key = {_id}
                            id={_id}
                            title={title}
                            description={description}
                            amount={amount}
                            date={date}
                            type={type}
                            category={category}
                            indicatorColor="var(--color-green)"
                            deleteItem={deleteExpense}
                            />
                        })}
                    </div>
                </div>

            </InnerLayout>
        </ExpensesStyled>
    )
}

const ExpensesStyled = styled.div`
    display: flex;
    overflow: auto;
    .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        backgroud: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 17px;
        padding: 0.7rem;
        margin: 0.5rem 0;
        font-size: 1.3rem;
        gap: 0.2rem;
        span{
            font-size: 1.3rem;
            font-weight: 600;
            color: var(--color-green);
        }

    }

    .income-content{
        display: flex;
        gap : 1.5rem;
        .incomes{
           flex : 1; 
        }
    }

`;

export default Expenses