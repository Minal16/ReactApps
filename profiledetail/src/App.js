import React, { Component } from 'react';
import './App.css';
import Details from './Details';
import {BrowserRouter,Link} from 'react-router-dom'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      listOfProfiles :[]
    }
  }

  componentDidMount(){

    let url = "https://randomuser.me/api/?results=100"; //random user api
    fetch(url).then((res)=>{
      return res.json();
      }).then((response)=>{

        this.setState({
        //  listOfProfiles : [...this.state.listOfProfiles,response.results]
        listOfProfiles :response.results
        })

      }).catch((error)=>{
        console.log(error);
      })

  }

  showDetails(indx){
    var profile = this.state.listOfProfiles.filter(function(item, index){
      return (index == indx);
    })

   
      // <BrowserRouter>
      //   <Details detail={profile[0]} />
      // </BrowserRouter>

      // <Link to="/detail" />
      this.props.history.push("/detail");
    
    
  }

  render() {
    return (
     <div> 
      {/* <Link to='/detail'>Detail</Link> */}
       <h2> LIST of profiles</h2>
        <ul className="container">
         { 
           this.state.listOfProfiles.map(function(item,index){
              return (
                <div  key={index} className="rowItem" >
                 <img className="image" src={item.picture.thumbnail} alt="" />
                 <div className="columnItem">
                 <Link to={`/detail/${item.id.value}`}>{item.name.first}</Link>
                  <label >{item.email}    </label>
                  </div>
              
                </div>
                )
            },this)
           }
          </ul>

       </div>
    );
  }
}

export default App;
