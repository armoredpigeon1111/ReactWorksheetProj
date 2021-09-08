import React, {Component} from "react";
import './App.css'
import DisplayName from './DisplayName/DisplayName'
import NamesList from "./NamesList/NamesList";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: 'Reggie',
            lastName: 'White',
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
            superheroes : [
                {
                    superheroId: 1,
                    name: 'Batman',
                    primaryAbility: 'Wealthy',
                    secondarAbility: 'Rich'
                },
                {
                    superheroId: 2,
                    name: 'Superman',
                    primaryAbility: 'Super strength',
                    secondarAbility: 'Fly'
                },
                {
                    superheroId: 3,
                    name: 'Spiderman',
                    primaryAbility: 'Spider senses',
                    secondarAbility: 'Shoots web'
                }
            ]
        };
    }

    render(){
        return(
            <div className="container-fluid">
            <h1>React Worksheet</h1>
            <DisplayName firstName = {this.state.firstName} lastName = {this.state.lastName} />
            <NamesList names = {this.state.names} />
            </div>

        )
    }    
}

export default App;