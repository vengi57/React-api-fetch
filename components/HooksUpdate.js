import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { render } from 'react-dom';


export default function HooksUpdate()
{
  const [data, setData] = useState({ hits: [] });
  const [query,setQuery] = useState(''); 
  const [search,setSearch] = useState('');

const handleSubmit = e =>
{
  e.preventDefault();
  setSearch(query);
}
const apifetch= async()=>
{
  try{
    const result = await axios(
      `https://hn.algolia.com/api/v1/search/?query=${query}`,
    );
    console.log("Data received");
    setData(result.data);
  }
  catch(error){
      console.log("Error",error);
  }   
}

useEffect(() => {
    apifetch();
  }, [search]);
  
  return (
    <div>
    <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value )}
      />
      <button type="submit" onClick={handleSubmit}>Search</button>
     <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
      </div>
  );
};

