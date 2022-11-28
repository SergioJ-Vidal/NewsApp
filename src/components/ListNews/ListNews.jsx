import React, { useEffect, useState } from 'react'
import './ListNews.scss';
import axios from 'axios';



export const ListNews = () => {
  const [news, setNews] = useState([])
  const findNews = async () => {

    try {
      const res = await axios.get("https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=vAB3ettct3bGEx6lMgvosTRqIIgRmAPc")
      const results = res.data.results;

      setNews(results)

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    findNews()
  }, [])

  const oneNew = news.map((dish) => <div className='new-container'>{dish.name} <br /> {dish.abstract} Author: {dish.byline}</div>);
  console.log(oneNew)

  return (<div className='list-body'>
    <span>NEWS</span>
    {oneNew}
  </div>)

}

