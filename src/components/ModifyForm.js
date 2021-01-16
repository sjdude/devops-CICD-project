import React from 'react'

export default class ModifyForm extends React.Component {
    constructor() {
        super() 
        this.state ={
            serverUrl : 'http://localhost:8000',
            tableSelect : '',
            secondaryTableSelect : '',
            tetiaryTableSelect : '',
            modifyStatus : '',
            customer_id : '',
            account_number : '',
            transaction_number : '',
            name : '',
            ic_number : '',
            mobile : '',
            email : '',
            password : '',
            account_type : '',
            date_created : '',
            max_limit : '',
            balance : '',
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.clearData=this.clearData.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
        
    }

    async handleSubmit(event) {
        event.preventDefault() //required to stop page from reloading on submit
        console.log("submitted");
        const data = this.state;
        const url = `${this.state.serverUrl}/${this.state.tableSelect}/${this.state.tetiaryTableSelect}/`
        console.log(url)
        await fetch(url, 
            {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            .then(response => {
                this.setState({modifyStatus: response.statusText})
                console.log(this.state.modifyStatus)
            })
            .catch(error=>{console.log(error)})
    }
    
    clearData(event) {
        event.preventDefault()
        console.log("clear data")
        this.setState({
            getData : [],
            tableSelect : '',
            secondaryTableSelect : '',
            tetiaryTableSelect : '',
            modifyStatus : '',
            customer_id : '',
            account_number : '',
            transaction_number : '',
            name : '',
            ic_number : '',
            mobile : '',
            email : '',
            password : '',
            account_type : '',
            date_created : '',
            max_limit : '',
            balance : '',
        })
    }
    
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label><h3>Modify Record: </h3></label><br/>
                    <select 
                        value={this.state.tableSelect}
                        onChange={this.handleChange}
                        name="tableSelect"
                    >
                        <option value=''>Select Record to modify</option>
                        <option value='users'>User</option>
                        <option value='accounts'>Account</option>
                        <option value='transactions'>Transaction</option>
                    </select>
                
                    {this.state.tableSelect === 'users'? 
                    <select 
                        value={this.state.secondaryTableSelect}
                        onChange={this.handleChange}
                        name="secondaryTableSelect"
                    >
                        <option value=''>Select</option>
                        <option value='customer_id'>by Customer ID:</option>
                    </select>
                    :null
                    }
                    
                    {this.state.tableSelect === 'users'? 
                    <input 
                        type="text" 
                        value={this.state.customer_id} //need this line to make state the single source of truth
                        name="customer_id" //name of input field
                        placeholder="Customer ID" 
                        onChange={this.handleChange} 
                    />
                    :null
                    }
                    
                    {this.state.tableSelect === 'accounts'? 
                    <select 
                        value={this.state.secondaryTableSelect}
                        onChange={this.handleChange}
                        name="secondaryTableSelect"
                    >
                        <option value=''>Select</option>
                        <option value='account_number'>by Account Number:</option>
                    </select>
                    : null
                    }

                    {this.state.tableSelect === 'accounts'? 
                    <input 
                        type="text" 
                        value={this.state.account_number} //need this line to make state the single source of truth
                        name="account_number" //name of input field
                        placeholder="Account Number" 
                        onChange={this.handleChange} 
                    />
                    :null
                    }

                    {this.state.tableSelect === 'transactions'? 
                    <select 
                        value={this.state.secondaryTableSelect}
                        onChange={this.handleChange}
                        name="secondaryTableSelect"
                    >
                        <option value=''>Select</option>
                        <option value='transaction_number'>by Transaction Number:</option>
                    </select> 
                    : null
                    }

                    {this.state.tableSelect === 'transactions'? 
                    <input 
                        type="text" 
                        value={this.state.transaction_number} //need this line to make state the single source of truth
                        name="transaction_number" //name of input field
                        placeholder="Transaction Number" 
                        onChange={this.handleChange} 
                    />
                    :null
                    } 
                    <br/>
                    
                    {this.state.tableSelect === 'users'? 
                    <select 
                        value={this.state.tetiaryTableSelect}
                        onChange={this.handleChange}
                        name="tetiaryTableSelect"
                        >
                        <option value=''>Select Info to amend</option>
                        <option value='name'>Name:</option>
                        <option value='ic_number'>IC Number:</option>
                        <option value='mobile'>Mobile:</option>
                        <option value='email'>Email:</option>
                        <option value='password'>Password:</option>
                    </select>
                    :null
                    } 
                    
                    {this.state.tableSelect === 'accounts'? 
                    <select 
                        value={this.state.tetiaryTableSelect}
                        onChange={this.handleChange}
                        name="tetiaryTableSelect"
                        >
                        <option value=''>Select Info to amend</option>
                        <option value='account_type'>Account Type:</option>
                        <option value='customer_id'>Customer ID:</option>
                        <option value='date_created'>Date Created:</option>
                        <option value='max_limit'>Maximum Limit:</option>
                        <option value='balance'>Balance:</option>
                    </select>
                    :null
                    } 

                    {this.state.tableSelect === 'transactions'? 
                    <select 
                        value={this.state.tetiaryTableSelect}
                        onChange={this.handleChange}
                        name="tetiaryTableSelect"
                        >
                        <option value=''>Select Info to amend</option>
                        <option value='datetime'>Date "yyyy-mm-dd":</option>
                        <option value='account_number'>Account Number:</option>
                        <option value='amount'>Amount:</option>
                        <option value='transaction_type'>Transaction type:</option>
                    </select>
                    :null
                    } 
                    
                    {this.state.tetiaryTableSelect === 'transaction_type'? 
                    <input 
                        type="text" 
                        value={this.state.transaction_type} //need this line to make state the single source of truth
                        name="transaction_type" //name of input field
                        placeholder="New transaction type" 
                        onChange={this.handleChange} 
                    />
                    :null
                    }

                    {this.state.tetiaryTableSelect === 'amount'? 
                    <input 
                        type="text" 
                        value={this.state.amount} //need this line to make state the single source of truth
                        name="amount" //name of input field
                        placeholder="New amount" 
                        onChange={this.handleChange} 
                    />
                    :null
                    }

                    {this.state.tetiaryTableSelect === 'account_number'? 
                    <input 
                        type="text" 
                        value={this.state.account_number} //need this line to make state the single source of truth
                        name="account_number" //name of input field
                        placeholder="New account number" 
                        onChange={this.handleChange} 
                    />
                    :null
                    }
                    
                    {this.state.tetiaryTableSelect === 'datetime'? 
                    <input 
                        type="text" 
                        value={this.state.datetime} //need this line to make state the single source of truth
                        name="datetime" //name of input field
                        placeholder="New date/time" 
                        onChange={this.handleChange} 
                    />
                    :null
                    }
                    
                    {this.state.tetiaryTableSelect === 'balance'? 
                    <input 
                        type="text" 
                        value={this.state.balance} //need this line to make state the single source of truth
                        name="balance" //name of input field
                        placeholder="New balance" 
                        onChange={this.handleChange} 
                    />
                    :null
                    }
                    
                    {this.state.tetiaryTableSelect === 'max_limit'? 
                    <input 
                        type="text" 
                        value={this.state.max_limit} //need this line to make state the single source of truth
                        name="max_limit" //name of input field
                        placeholder="New max. limit" 
                        onChange={this.handleChange} 
                    />
                    :null
                    }
                    
                    {this.state.tetiaryTableSelect === 'date_created'? 
                    <input 
                        type="text" 
                        value={this.state.date_created} //need this line to make state the single source of truth
                        name="date_created" //name of input field
                        placeholder="New creation date" 
                        onChange={this.handleChange} 
                    />
                    :null
                    }
                    
                    {this.state.tetiaryTableSelect === 'customer_id'? 
                    <input 
                        type="text" 
                        value={this.state.customer_id} //need this line to make state the single source of truth
                        name="customer_id" //name of input field
                        placeholder="New Customer ID" 
                        onChange={this.handleChange} 
                    />
                    :null
                    }
                    
                    {this.state.tetiaryTableSelect === 'account_type'? 
                    <input 
                        type="text" 
                        value={this.state.account_type} //need this line to make state the single source of truth
                        name="account_type" //name of input field
                        placeholder="New account type" 
                        onChange={this.handleChange} 
                    />
                    :null
                    }
                    
                    {this.state.tetiaryTableSelect === 'password'? 
                    <input 
                        type="text" 
                        value={this.state.password} //need this line to make state the single source of truth
                        name="password" //name of input field
                        placeholder="New password" 
                        onChange={this.handleChange} 
                    />
                    :null
                    }
                    
                    {this.state.tetiaryTableSelect === 'email'? 
                    <input 
                        type="text" 
                        value={this.state.email} //need this line to make state the single source of truth
                        name="email" //name of input field
                        placeholder="New email" 
                        onChange={this.handleChange} 
                    />
                    :null
                    }

                    {this.state.tetiaryTableSelect === 'mobile'? 
                    <input 
                        type="text" 
                        value={this.state.mobile} //need this line to make state the single source of truth
                        name="mobile" //name of input field
                        placeholder="New mobile number" 
                        onChange={this.handleChange} 
                    />
                    :null
                    }
                    
                    {this.state.tetiaryTableSelect === 'ic_number'? 
                    <input 
                        type="text" 
                        value={this.state.ic_number} //need this line to make state the single source of truth
                        name="ic_number" //name of input field
                        placeholder="New IC Number" 
                        onChange={this.handleChange} 
                    />
                    :null
                    }
                    
                    {this.state.tetiaryTableSelect === 'name'? 
                    <input 
                        type="text" 
                        value={this.state.name} //need this line to make state the single source of truth
                        name="name" //name of input field
                        placeholder="New name" 
                        onChange={this.handleChange} 
                    />
                    :null
                    }

                    {this.state.tableSelect !== '' ?
                    <div>
                        <br />Modify status {this.state.secondaryTableSelect} <br/>
                        Amend: {this.state.tetiaryTableSelect}: <br/>
                        Status: {this.state.modifyStatus} <br/>
                        <button>Submit</button>
                        <button onClick={this.clearData}>Clear</button>
                    </div> 
                    :null
                    }   
                </form>
            </div>
        )
    }
}