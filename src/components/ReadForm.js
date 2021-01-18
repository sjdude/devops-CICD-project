import React from 'react'
import UserTableDisplay from './UserTableDisplay'
import AccountsTableDisplay from './AccountsTableDisplay'
import TransactionsTableDisplay from './TransactionsTableDisplay'


class ReadForm extends React.Component {
    constructor() {
        super()
        this.state = {
            serverUrl : 'https://devops-cicd-backend.herokuapp.com',
            getData : [],
            tableSelect : '',
            secondaryTableSelect :'',
            inputBox : ''
        }
        
        this.clearData=this.clearData.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        // this.componentDidMount=this.componentDidMount.bind(this)
        
        
    }

    // async componentDidMount() {
    //     await fetch(`${this.state.serverUrl}/${this.state.tableSelect}/${this.state.usersTableSelect}`)
    //         .then(response => response.json())
    //         .then(response => {
    //             this.setState({getData: response})
    //         })
    //         .catch(error=>{console.log(error)})
            
    // }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
        
    }

    async handleSubmit(event) {
        event.preventDefault() //required to stop page from reloading on submit
        console.log("submitted");
        const url = `${this.state.serverUrl}/${this.state.tableSelect}/${this.state.secondaryTableSelect}/${this.state.inputBox}`
        console.log(url)
        await fetch(url)
            .then(response => response.json())
            .then(response => {
                this.setState({getData: response})
            })
            .catch(error=>{console.log(error)})
    }

    clearData(event) {
        event.preventDefault()
        console.log("clear data")
        this.setState({
            getData : [],
            inputBox : '',
            tableSelect : '',
            secondaryTableSelect :'',
            
        })
    }

    render() {
        
        const tableSelect = () =>{
            if (this.state.tableSelect === 'users') {
                return(<UserTableDisplay data = {this.state} />)
            } else if (this.state.tableSelect === 'accounts') {
                return(<AccountsTableDisplay data = {this.state} />)
            } else if (this.state.tableSelect === 'transactions') {
                return(<TransactionsTableDisplay data = {this.state} />)
            } else {
                return(null)
            }
        }

        return(
            <div className='dropdown' >
            <form onSubmit={this.handleSubmit}>
                <label><h3>Select Information to View:</h3></label><br/>
                <select 
                    value={this.state.tableSelect}
                    onChange={this.handleChange}
                    name="tableSelect"
                    class="form-control"
                                                            
                >
                    <option value=''>Select Info to view</option>
                    <option value='users'>Users</option>
                    <option value='accounts'>Accounts</option>
                    <option value='transactions'>Transactions</option>
                </select>
                <br/>
                {this.state.tableSelect === 'users'? 
                    
                    <select 
                        value={this.state.secondaryTableSelect}
                        onChange={this.handleChange}
                        name="secondaryTableSelect"
                        class="form-control"
                    >
                        <option value=''>Select Info to view</option>
                        <option value='all'>view All Customers</option>
                        <option value='customer_id'>view by Customer ID:</option>
                    </select>
                    
                    : null
                    
                }

                {this.state.tableSelect === 'accounts'? 
                    
                    <select 
                        value={this.state.secondaryTableSelect}
                        onChange={this.handleChange}
                        name="secondaryTableSelect"
                        class="form-control"
                    >
                        <option value=''>Select Info to view</option>
                        <option value='all'>view All Accounts</option>
                        <option value='account_number'>view by Account Number:</option>
                        <option value='customer_id'>view by Customer ID:</option>
                        <option value='date_created'>view by date created "yyyy-mm-dd"</option>
                    </select>
                    
                    : null
                    
                }
                
                {this.state.tableSelect === 'transactions'? 
                    
                    <select 
                        value={this.state.secondaryTableSelect}
                        onChange={this.handleChange}
                        name="secondaryTableSelect"
                        class="form-control"
                    >
                        <option value=''>Select Info to view</option>
                        <option value='all'>view All Transactions</option>
                        <option value='transaction_number'>view by Transaction Number:</option>
                        <option value='datetime'>view by date "yyyy-mm-dd"</option>
                        <option value='account_number'>view by Account Number:</option>
                        <option value='amount'>view by amount:</option>
                        <option value='transaction_type'>view by Transaction type:</option>
                    </select>
                    
                    : null
                    
                }

                {this.state.tableSelect !== '' ?
                <div>
                    <input 
                        type="text" 
                        value={this.state.inputBox} //need this line to make state the single source of truth
                        name="inputBox" //name of input field
                        placeholder="Enter Query" 
                        onChange={this.handleChange} 
                        
                    />
                               
                    <br/>
                    <button >Submit</button>
                    <button onClick={this.clearData}>Clear</button>
                </div>
                :null
                }
            </form>
            
            {/* <br />
            Table selected: {this.state.tableSelect}<br/>
            Sub table selected: {this.state.secondaryTableSelect} <br/>
            Customer ID: {this.state.inputBox}<br/>
            <br /> */}
            
            <table class="table">
                {tableSelect()}
            </table>
            </div>
        )
    }
}

export default ReadForm; 