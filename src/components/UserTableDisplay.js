import React from 'react'

function UserTableDisplay(props) {
    return(
        <table className="userTable">
                <tbody>
                    <tr>
                        <th>Customer ID</th>
                        <th>Name</th>
                        <th>IC Number</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                    {props.data.getData.map((item) => {
                    return (
                        <tr key={item.customer_id}>
                            <td> {item.customer_id} </td>
                            <td> {item.name} </td>
                            <td> {item.ic_number} </td>
                            <td> {item.mobile} </td>
                            <td> {item.email} </td>
                            <td> {item.password} </td>
                        </tr>
                    );
                    })}
                </tbody>
            </table>
    )
}

export default UserTableDisplay;