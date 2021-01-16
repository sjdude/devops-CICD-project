import React from 'react'

function TransactionsTableDisplay(props) {
    return(
        <table className="transactionsTable">
                <tbody>
                    <tr>
                        <th>Transaction Number</th>
                        <th>Date of Transaction</th>
                        <th>Account Number</th>
                        <th>Amount</th>
                        <th>Transaction Type</th>
                        
                    </tr>
                    {props.data.getData.map((item) => {
                    return (
                        <tr key={item.transaction_number}>
                            <td> {item.transaction_number} </td>
                            <td> {item.datetime} </td>
                            <td> {item.account_number} </td>
                            <td> {item.amount} </td>
                            <td> {item.transaction_type} </td>
                            
                        </tr>
                    );
                    })}
                </tbody>
            </table>
    )
}

export default TransactionsTableDisplay;