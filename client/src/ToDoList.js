import React, {Component} from 'react'

class ToDoList extends Component {

    thisIsAMapFunction(eachItem) {
        return (
            <div>
                <p>{eachItem._id},
                    {eachItem.username},
                    {eachItem.todo},
                    {eachItem.isDone.toString()}</p>
                <button onClick={() => this.props.deleteFunction(eachItem._id)}>Delete</button>
                <hr/>
            </div>
        )
    }

    render() {
        //console.log(this.props.arr);
        var forEachItem =
            this.props.arr.map(
                (eachItem) =>
                    this.thisIsAMapFunction(eachItem));

        return (
            <div>
                <h2> {forEachItem}</h2>
            </div>
        );
    }
}

export default ToDoList;