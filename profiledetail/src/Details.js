import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Details extends Component{

    render(){

        return(
            <div>

               <Link to="/" >Back to List </Link>

                <div> Index is  : 
                {
                    parseInt(this.props.match.params.index,10)
                    /* <img src={this.props.detail.picture.thumbnail} alt="" />
                <div>
                    <label> {this.props.detail.name.first } </label> 
                    <label> {this.props.detail.email } </label>
                </div> */}
                </div>
            </div>
                 )


    }
}

export default Details;