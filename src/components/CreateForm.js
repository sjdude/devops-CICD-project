import React from 'react'

class CreateForm extends React.Component {
    constructor() {
        super() 
        this.state ={
            serverUrl : 'http://localhost:8000',
            tableSelect : '',
            customer_id : '',
            name: '',
            ic_number : '',
            mobile : '',
            email : '',
            password : '',
            account_number : '',
            account_type : '',
            date_created : '',
            max_limit : '',
            balance : '',
            postStatus : ''
        }

        this.clearData=this.clearData.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    
    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
        
    }

    async handleSubmit(event) {
        event.preventDefault() //required to stop page from reloading on submit
        const data = this.state;
        console.log("submitted");
        console.log(data);
        const url = `${this.state.serverUrl}/${this.state.tableSelect}/`
        console.log(url)
        await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
            .then(response => {
                this.setState({postStatus: response.statusText})
            })
            .catch(error=>{console.log(error)})
    }

    clearData(event) {
        event.preventDefault()
        console.log("clear data")
        this.setState({
            tableSelect : '',
            customer_id : '',
            name: '',
            ic_number : '',
            mobile : '',
            email : '',
            password : '',
            account_number : '',
            account_type : '',
            date_created : '',
            max_limit : '',
            balance : '',
            postStatus : ''
        })
    }
    
    render() {
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <label><h3>Create New Account:</h3></label><br/>
                <select 
                    value={this.state.tableSelect}
                    onChange={this.handleChange}
                    name="tableSelect"
                >
                    <option value=''>Select type of Account to create</option>
                    <option value='users'>User Account</option>
                    <option value='accounts'>Bank Account</option>
                    
                </select>
                <br/>
                {this.state.tableSelect === 'users'? 
                    <div>
                        <input 
                        type="text" 
                        value={this.state.customer_id} //need this line to make state the single source of truth
                        name="customer_id" //name of input field
                        placeholder="Customer ID" 
                        onChange={this.handleChange} 
                        /> <br/>
                        <input 
                        type="text" 
                        value={this.state.name} //need this line to make state the single source of truth
                        name="name" //name of input field
                        placeholder="Name" 
                        onChange={this.handleChange} 
                        /> <br/>
                        <input 
                        type="text" 
                        value={this.state.ic_number} //need this line to make state the single source of truth
                        name="ic_number" //name of input field
                        placeholder="IC Number" 
                        onChange={this.handleChange} 
                        /> <br/>
                        <input 
                        type="text" 
                        value={this.state.mobile} //need this line to make state the single source of truth
                        name="mobile" //name of input field
                        placeholder="Mobile Number" 
                        onChange={this.handleChange} 
                        /> <br/>
                        <input 
                        type="text" 
                        value={this.state.email} //need this line to make state the single source of truth
                        name="email" //name of input field
                        placeholder="E-mail Address" 
                        onChange={this.handleChange} 
                        /> <br/>
                        <input 
                        type="text" 
                        value={this.state.password} //need this line to make state the single source of truth
                        name="password" //name of input field
                        placeholder="Password" 
                        onChange={this.handleChange} 
                        /> <br/>
                    </div>
                    : null
                    
                }

                {this.state.tableSelect === 'accounts'? 
                    <div>
                        <input 
                        type="text" 
                        value={this.state.account_number} //need this line to make state the single source of truth
                        name="account_number" //name of input field
                        placeholder="Account Number" 
                        onChange={this.handleChange} 
                        /> <br/>
                        <input 
                        type="text" 
                        value={this.state.account_type} //need this line to make state the single source of truth
                        name="account_type" //name of input field
                        placeholder="Account Type" 
                        onChange={this.handleChange} 
                        /> <br/>
                        <input 
                        type="text" 
                        value={this.state.customer_id} //need this line to make state the single source of truth
                        name="customer_id" //name of input field
                        placeholder="Customer ID" 
                        onChange={this.handleChange} 
                        /> <br/>
                        <input 
                        type="text" 
                        value={this.state.date_created} //need this line to make state the single source of truth
                        name="date_created" //name of input field
                        placeholder="Date Created YYYY-MM-DD" 
                        onChange={this.handleChange} 
                        /> <br/>
                        <input 
                        type="text" 
                        value={this.state.max_limit} //need this line to make state the single source of truth
                        name="max_limit" //name of input field
                        placeholder="Maximum Limit" 
                        onChange={this.handleChange} 
                        /> <br/>
                        <input 
                        type="text" 
                        value={this.state.balance} //need this line to make state the single source of truth
                        name="balance" //name of input field
                        placeholder="Balance" 
                        onChange={this.handleChange} 
                        /> <br/>
                        
                    </div>
                    : null
                    
                }
                
                {this.state.tableSelect !== '' ?
                
                <div>
                    New record creation status: {this.state.postStatus}<br/>                        
                    
                    <button>Submit</button>
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
            {/* Info entered:<br/>
            customer_id: {this.state.customer_id}<br/>
            name: {this.state.name}<br/>
            ic_number: {this.state.ic_number}<br/>
            mobile: {this.state.mobile} <br/>
            email: {this.state.email}<br/>
            password: {this.state.password}<br/> */}
            
            
            </div>
        )
    }
}

export default CreateForm