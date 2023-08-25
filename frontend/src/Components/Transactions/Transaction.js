import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/globalContext";

function Transaction() {

    const{transactions} = useGlobalContext()

    const [...history] = transactions()
    return(
        <TransactionStyled>
            <InnerLayout>
            <h2>Transaction History</h2>
            {history.map((item) =>{
                const {_id, title, amount, type} = item
                return (
                    <div key={_id} className='history-item'>
                        <p style={{
                            color: type === 'expense'? 'red' : 'var(--color-green)'
                        }}>
                            {title}
                        </p>

                        <p style={{
                            color: type === 'expense'? 'red' : 'var(--color-green)'
                        }}>
                            {
                                type === 'expense' ? `-${amount}` : `+${amount}`
                            }
                        </p>
                    </div>
                )
            })}
            </InnerLayout>
        </TransactionStyled>
    )
}

const TransactionStyled = styled.div`
    display: flex;
    overflow: auto;
    flex-direction: row;
    gap: 1rem;
    h2{
        font-size: 1.5rem;
    }
    .history-item{
        font-size: 0.8rem;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 0.8rem;
        margin : 0.8rem 0;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

`;

export default Transaction;