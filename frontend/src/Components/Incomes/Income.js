import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/globalContext";
import Form from "../Form/Form"
import IncomeItem from "../IncomeItem/IncomeItem";


function Income(){
    const {addIncome , incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext()

    useEffect(()=>{
        getIncomes()
    },[])

    return(
        <IncomeStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                <h2 className="total-income"> Total Income : <span>Rs. {totalIncome()} </span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                        
                    <div className="incomes">
                        {incomes.map((income)=>{
                            const{_id, title, amount, date, category, description, type} = income;
                            return <IncomeItem 
                            key = {_id}
                            id={_id}
                            title={title}
                            description={description}
                            amount={amount}
                            type = {type}
                            date={date}
                            category={category}
                            indicatorColor="var(--color-green)"
                            deleteItem={deleteIncome}
                            // addIncome = {amount}
                            />
                        })}
                    </div>
                </div>

            </InnerLayout>
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div`
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

export default Income