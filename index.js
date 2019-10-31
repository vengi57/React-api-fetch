import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";


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
        <li key={item.id}>
        {item.company.name}
        </li>
      ))}
      <Title title={title}/>
      <Form form={form}/>
      <Weather weather={weather}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
