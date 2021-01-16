import React from 'react'

import Header from './components/Header'
import ReadForm from './components/ReadForm'
import CreateForm from './components/CreateForm'
import DeleteForm from './components/DeleteForm'
import ModifyForm from './components/ModifyForm'
import Game from './components/TicTacToe'

import "./components/bootstrap.min.css"
// import "./App.css"

class App extends React.Component {
    constructor(){
        super()
        this.state = {}
    }

    render() {
        return(
            <div>
                <Header />
                <ReadForm /><br/>
                <CreateForm /><br/>
                <DeleteForm /><br/>
                <ModifyForm /><br/>
                <Game />
            </div>
        )
    }

}

export default App;
                
