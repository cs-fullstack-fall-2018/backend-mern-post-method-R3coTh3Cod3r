import React, {Component} from 'react';
import './App.css';
import ToDoList from "./ToDoList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            stringInfo: ''
        }
    }
    submitChange =(event) =>{
        fetch('/api/todo',
            {
                method: "POST",
                body: JSON.stringify(
                    {
                        username: "test",
                        todo: this.state.stringInfo,
                        isDone: "false"
                    }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(data => data.json());
        event.preventDefault();
    }

    InputOnChange =(event) =>{
        this.setState({stringInfo: event.target.value})


    };

    deleteByID(id) {
        fetch('/api/todo',
            {
                method: "POST",
                body: JSON.stringify({"id": id}),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(data => data.json());
    };

    render() {
        fetch('/api/todo/test')
            .then(data => data.json())
            .then(response => this.setState({data: response}));

        return (
            <div className="App">

                <ToDoList arr={this.state.data}
                          deleteFunction={this.deleteByID}/>
                <form onSubmit={this.submitChange}>

                    <label>
                        Username:
                        <input type="text" placeholder={"Enter Username"}/>
                    </label>


                    <br/>
                    <label>ToDo:
                        <input type="text" value={this.state.stringInfo}  onChange={this.InputOnChange}/>
                    </label>
                    <br/>
                    <input type="submit" value="Submit"/>
                    <hr/>
                    <label>Show Task List for</label>
                    <br/>

                    <input type="text"/>
                    <input type="submit" value="Submit"/>
                    <hr/>
                    <input type="submit" value="Show All"/>
                </form>
            </div>


        );
    }
}

export default App;