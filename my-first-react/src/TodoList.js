import React, {Component} from "react"
import "./TodoList.css"
import ShowList from "./ShowList"

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state= {
            listItems : [],
            task:""
        }
    }

    addTask(e){
        e.preventDefault();
        var val = this.refs["taskname"].value;
        this.setState({
            listItems : [...this.state.listItems, this.state.task],
            task : ""
        })

        console.log(this.state.listItems.length);

    }
    deleteTask(index){

        var list = this.state.listItems.filter(function(item,indx){
            return (index != indx);
        })

        this.setState({
            listItems : list
        });
    }

    render(){
        return(
        <div>
            <form onSubmit={this.addTask.bind(this)} >
                <input placeholder="Enter the task" value={this.state.task} ref="taskname" onChange={(e)=>{this.setState({task : e.target.value})}} />
                <button type="submit"> Add Task to List </button> 
                <ShowList items={this.state.listItems} delete={this.deleteTask.bind(this)}/>
            </form>
        </div>
        );
    }

}

export default TodoList;