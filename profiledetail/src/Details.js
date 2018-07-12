import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Details extends Component{
    constructor(props){
        super(props);

        this.state ={
            profile : null,
            isMounted : true
        }
    }

    //refer : https://stackoverflow.com/questions/47921783/react-error-on-componentdidmount-can-only-update-a-mounted-or-mounting-compon?rq=1
    componentWillUnmount(){
        this.setState({
           isMounted: false
        })
      }

    //refer : https://stackoverflow.com/questions/47921783/react-error-on-componentdidmount-can-only-update-a-mounted-or-mounting-compon?rq=1
    componentDidMount(){
       // parseInt(this.props.match.params.index,10)
        fetch("https://randomuser.me/api/?id=" + this.props.match.params.index).then((res) => {
            return res.json();
        }).then((response)=> {
            if(response && response.results){
                this.setState(function (state, props) { // Functional setState
                    if(state.isMounted){
                         return {
                            profile : response.results[0]
                          }
                        }
                    });
            }
        }).catch((err)=>{
            console.log(err);
        });
    }

    render(){

        return(
            <div className="margin">
            <Link to="/" >Back to List </Link>
             { this.state && this.state.profile &&
                    <div className="margin">
                        <img src={this.state.profile.picture.thumbnail} alt="" />
                            <div className="columnItem">
                                <label> {this.state.profile.name.first } </label> 
                                <label> {this.state.profile.email } </label>
                            </div>  
                    </div>
             }
            </div>
        )


    }
}

export default Details;