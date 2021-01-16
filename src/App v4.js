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
                    uri: "/users/customer_id/",
                    getparam : '9999999'
    }
  }

  
  get() {
    axios.get(this.state.url + this.state.uri + this.state.getparam)
      .then((response) => {
        console.log(response.data);  
        console.log('success');
        this.setState({data: response.data});
        console.log(this.state.data);
        })
      .catch((error) => {
        console.log(error);
        }); 
    
   
  }
  
  componentDidMount() {
    // react lifecycle method componentDidMount()
    //will execute the callAPIserver() method after the component mounts.
    console.log("componentDidMount");
    this.get();
        
  }

  componentDidUpdate() {  
    
    console.log("componentDidUpdate");
  }   


  render() {
    console.log("render");
    
    return (
      <div className="App">
        
        
        <header className="App-header">
          <div className="flex-between">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-title">This is Demo for Charts</div>
          </div>
          <div>
            <button onClick= {this.get}>Get request</button>
                       
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
