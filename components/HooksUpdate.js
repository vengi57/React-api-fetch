import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { render } from 'react-dom';


export default function HooksUpdate()
{
  const [data, setData] = useState({ hits: [] });
  const [query,setQuery] = useState('redux');
  const [search, setSearch] = useState('redux');

  
   useEffect(async () => {
    const result = await axios(
      `https://hn.algolia.com/api/v1/search?query=${query}`,
    );
    setData(result.data);
  }, [search]);
  return (
    <div>
    <input
        type="text"
        value={query}
        onChange={event => setQuery(console.log(event.target.value))}
      />
      <button type="button" onClick={() => setSearch(query)}>
        Search
      </button>

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

