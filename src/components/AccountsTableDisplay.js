import React from 'react'

function AccountsTableDisplay(props) {
    return(
        <table className="accountsTable">
                <tbody>
                    <tr>
                        <th>Account Number</th>
                        <th>Account Type</th>
                        <th>Customer ID</th>
                        <th>Date Created</th>
                        <th>Max. Limit</th>
                        <th>Balance</th>
                    </tr>
                    {props.data.getData.map((item) => {
                    return (
                        <tr key={item.account_number}>
                            <td> {item.account_number} </td>
                            <td> {item.account_type} </td>
                            <td> {item.customer_id} </td>
                            <td> {item.date_created} </td>
                            <td> {item.max_limit} </td>
                            <td> {item.balance} </td>
                        </tr>
                    );
                    })}
                </tbody>
            </table>
    )
}

export default AccountsTableDisplay;