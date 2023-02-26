import React from 'react'
import axios from 'axios';


const YOUTUB_URL='https://youtube138.p.rapidapi.com'
const options = {
     params: { hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_YOUTUB_API ,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };


 export const fetchYoutubapi= async (url) => {
    const {data} = await axios.get(`${YOUTUB_URL}/${url}`, options);
     return data;
  }

  

