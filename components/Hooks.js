import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { render } from 'react-dom';


export default function Hooks()
{
  const [data, setData] = useState({ results: [] });
   useEffect(async () => {
    const result = await axios(
      'https://randomuser.me/api/',
    );
    setData(result.data);
  }, []);
  
  return (
    <div>
      {data.results.map(item => (
        <div>
          <p>{item.email}</p>
          <img src={item.picture.large}/>
          </div>
      ))}
      </div>
  );
};

