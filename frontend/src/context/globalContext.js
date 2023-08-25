import React, { createContext, useContext, useState } from "react";
import axios from 'axios'


const BASE_URL = "http://localhost:8080/api/v1/";

const GlobalContext = createContext()

const GlobalProvider = ({children}) =>{

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError ] = useState(null)

    const addIncome = async(income)=>{
        const response = await axios.post(`${BASE_URL}add-income`, income)
        .catch((err) =>{
            setError(err.response.data.message)
        })
        console.log(response);
        getIncomes()
    }

    const getIncomes = async () =>{
        const response = await axios.get(`${BASE_URL}get-income`)
        setIncomes(response.data)
        console.log(response.data);
    }

    const deleteIncome = async(id) => {
        const res = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncomes()
        console.log(res);
    }


    const totalIncome = ()=>{
        let totalIncome = 0;
        incomes.forEach((income)=>{
            totalIncome +=  income.amount;
        })

        return totalIncome;
    }

    //calculate incomes
    const addExpense = async (income) =>{
        const response = await axios.post(`${BASE_URL}add-expense`, income)
        .catch((err) =>{ 
            setError(err.response.data.message)
        })
        getExpenses()
        console.log(response);
    }

    const getExpenses = async () =>{
        const response = await axios.get(`${BASE_URL}get-expense`)
        setExpenses(response.data)
        console.log(response.data);
    }

    const deleteExpense = async(id) => {
        const res = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpenses()
        console.log(res);
    }


    const totalExpense = ()=>{
        let totalExpense = 0;
        expenses.forEach((expense)=>{
            totalExpense +=  expense.amount;
        })

        return totalExpense;
    }

    const totalBalance = (()=>{
        return totalIncome() - totalExpense()
    })

    const transactionHistory = () =>{
        const history = [...incomes, ...expenses]
        history.sort((a,b) =>{
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0,4)
    }

    const transactions = () =>{
        const history = [...incomes, ...expenses]
        history.sort((a,b) =>{
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history
    }

    return (
        <GlobalContext.Provider value={{
            incomes,
            expenses,
            addIncome,
            getIncomes,
            deleteIncome,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpense,
            totalBalance,
            transactionHistory,
            error,
            setError,
            transactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

 const useGlobalContext = ()=>{
     return useContext(GlobalContext)

}

export { GlobalContext, GlobalProvider, useGlobalContext};
