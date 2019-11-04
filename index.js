import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";
import RandomUser from "./components/RandomUser";
import axios from 'axios';


class App extends Component {
  constructor(props)
  {
    super(props);
    this.state =
    {
      array:[],
      isLoading:false,
      title:"Title",
      form:"Form",
      weather:"Weather",
      website:undefined
    }
  }
  
  // componentDidMount(){
  //   axios
  //   .get("https://jsonplaceholder.typicode.com/users")
  //   .then(response=>{
  //     this.setState({
  //       array:response.data,
  //       isLoading:true
  //     })
  //   })
  // }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(json=>{
      this.setState({
          array:json,
          isLoading:true,
          // website:res.website
      });
    })
   
  }

  render() {
    const {isLoading,array,title,form,weather} = this.state;

    if(!isLoading)
    {
      <h1>Loading.....</h1>
    }
    return (
      <div>
      {array.map(item=>(
        <div>
       <p>Email :  {item.email}</p>
       <p>Zip code : {item.address.zipcode}</p>
       </div>
      ))}
      <Title title={title}/>
      <Form form={form}/>
      <Weather weather={weather}/>
      <RandomUser/>
      </div>
    );
  }
}
// class App extends React.Component {
//   // State will apply to the posts object which is set to loading by default
//   state = {
//     results: [],

//     isLoading: true,
//     errors: null
//   };
//   // Now we're going to make a request for data using axios
//   getPosts() {
//     axios
//       // This is where the data is hosted
//       .get("https://randomuser.me/api/")
//       // Once we get a response and store data, let's change the loading state
//       .then(response => {
//         this.setState({
//           results: response.data.results,
//           isLoading: false
//         });
//       })
//       // If we catch any errors connecting, let's update accordingly
//       .catch(error => this.setState({ error, isLoading: false }));
//   }
//   // Let's our app know we're ready to render the data
//   componentDidMount() {
//     this.getPosts();
//   }
//   // Putting that data to use
//   render() {
//     const { isLoading, results } = this.state;
//     return (
//       <React.Fragment>
//         <h2>Random Post</h2>
//         <div>
//           {!isLoading ? (
//             results.map(post => {
//               const { gender, city, content,picture } = post;
//               return (
//                 <div>
//                   <h2>{gender}</h2>
//                   <p>{city}</p>
//                   <img src={picture.medium}/>
//                   <hr />
//                 </div>
//               );
//             })
//           ) : (
//             <p>Loading...</p>
//           )}
//         </div>
//       </React.Fragment>
//     );
//   }
// }

 render(<App />, document.getElementById('root'));
