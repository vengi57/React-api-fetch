import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

class RandomUser extends Component {
  constructor(props)
  {
    super(props);
    this.state =
    {
      results:[],
      isLoading:false
    }
  }
  
  componentDidMount(){
    axios
    .get("https://randomuser.me/api/")
    .then(response=>{
      this.setState({
        results:response.data.results,
        isLoading:true
      });
    })
  }
  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res=>res.json())
  //   .then(json=>{
  //     this.setState({
  //         array:json,
  //         isLoading:true,
  //         // website:res.website
  //     });
  //   })
   
  // }

  render() {
    const {isLoading,results} = this.state;

    if(!isLoading)
    {
      <h1>Loading.....</h1>
    }
    return (
      <div>
      {
        results.map(item=>
        {
          const {email,location,picture}  =  item;
          return(
            <div>
            <p>Email :  {email}</p>
            <p>Zip code : {location.postcode}</p>
            <img src={picture.large}/>
            </div>
          )
        }
      )}
      </div>
    );
  }
}

export default RandomUser;