import React, {Component} from "react"
import ReactDOM from "react-dom"

class ShowList extends Component{

    onDelete(index){
        this.props.delete(index);
    }
    render(){
        return(
            <div>
                <ul>
                   {
                    this.props.items.map(function(item, index){
                       return <li key={index} onClick={() => this.onDelete(index)} > {item}</li>
                      }, this)
                   } 
                </ul>
            </div>
        );


    }

}

export default ShowList;