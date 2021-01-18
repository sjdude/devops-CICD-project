import React from 'react'

class DeleteForm extends React.Component {
    constructor() {
        super() 
        this.state ={
            serverUrl : 'https://devops-cicd-backend.herokuapp.com',
            tableSelect : '',
            secondaryTableSelect : '',
            inputBox : '',
            deleteStatus : ''
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
        
        const url = `${this.state.serverUrl}/${this.state.tableSelect}/${this.state.secondaryTableSelect}/${this.state.inputBox}`
        console.log(url)
        await fetch(url, 
            {
                method: 'DELETE'
            })
            .then(response => {
                this.setState({deleteStatus: response.statusText})
                console.log(this.state.deleteStatus)
            })
            .catch(error=>{console.log(error)})
    }
    
    clearData(event) {
        event.preventDefault()
        console.log("clear data")
        this.setState({
            getData : [],
            inputBox : '',
            deleteStatus :'',
            tableSelect : '',
            secondaryTableSelect : ''
        })
    }
    
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label><h3>Delete Account/Record: </h3></label><br/>
                    <select 
                        value={this.state.tableSelect}
                        onChange={this.handleChange}
                        name="tableSelect"
                    >
                        <option value=''>Select Account/Record to delete</option>
                        <option value='users'>User</option>
                        <option value='accounts'>Account</option>
                        <option value='transactions'>Transaction</option>
                    </select>
                    <br/>
                    {this.state.tableSelect === 'users'? 
                    
                    <select 
                        value={this.state.secondaryTableSelect}
                        onChange={this.handleChange}
                        name="secondaryTableSelect"
                    >
                        <option value=''>Select</option>
                        <option value='customer_id'>by Customer ID:</option>
                    </select>
                    
                    : null
                    
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
                
                {this.state.tableSelect !== '' ?
                <div>
                    
                    <input 
                        type="text" 
                        value={this.state.inputBox} //need this line to make state the single source of truth
                        name="inputBox" //name of input field
                        placeholder="Enter Query" 
                        onChange={this.handleChange} 
                    />
                    <br />Delete status {this.state.secondaryTableSelect} {this.state.inputBox}: {this.state.deleteStatus} <br/>
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

export default DeleteForm