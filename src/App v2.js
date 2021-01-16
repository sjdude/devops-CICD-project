//NUSMoney APP Frontend Group Members: Lim Sheng Jun, Soong Xuan De
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.svg';
import * as d3 from 'd3' 
import "./App.css";

const axios = require('axios').default;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  data: [],
                    reqBody: {},
                    url: "http://localhost:8000",
                    uri: "/users/all"
    }
  }

  callAPIServer() {
    //when component mounted, start a GET request
    //to specified URL
    var data = {'customer_id': 9999999,
                'name': 'Xuande'
                };

    fetch(`${this.state.url}${this.state.uri}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      //body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => this.setState({ data: res }))
    .catch(err => err); 
    console.log("callAPIServer");
    console.log(this.state.data);
    }
  
  componentDidMount() {
    // react lifecycle method componentDidMount()
    //will execute the callAPIserver() method after the component mounts.
    console.log("componentDidMount");
    this.callAPIServer();
        
  }

  componentDidUpdate() {  
    console.log("componentDidUpdate");
  }   


  render() {
    console.log("render");
    this.callAPIServer();
    return (
      <div className="App">
        
        
        <header className="App-header">
          <div className="flex-between">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-title">This is Demo for Charts</div>
          </div>
          <div>
            {/* <button disabled = {this.state.accountsClicked ? true : false } onClick= {this.showChart}>Get request</button> */}
                       
          </div>
        </header>
        <div className="container">
          <div id="visualisation">
        </div>
        
        

        <h2>Accounts Information</h2>
          <table className="myTable">
            <tbody>
            {this.state.data.map((item) => {
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
      </div>
    </div>
    );
  };
};

export default App;
