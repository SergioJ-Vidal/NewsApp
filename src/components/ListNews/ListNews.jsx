import React, { useEffect, useState, useContext } from 'react'
import './ListNews.scss';
import axios from 'axios';
import { GlobalContext } from "../../context/GlobalState";



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

  // const getNews = useContext(GlobalContext);
  // console.log(getNews)

  useEffect(() => {
    findNews()
  }, [])

  // useEffect(() => {
  //   getNews()
  // }, [])

  const newsListado = news.map((resultNew) => {
    return (
      <div key={resultNew.id} className="new-container">
        <div className="new-box">
          <span className="title">{resultNew.title}</span>
          <span className="date">{resultNew.published_date}</span>
          <span className="body">{resultNew.abstract}</span>
          <span className="author">{resultNew.byline}</span>
          {resultNew?.multimedia?<img className="screens" src={resultNew?.multimedia[2].url} alt="" /> : null }
          <a href={resultNew.url} target="_blank" rel="noopener noreferrer"> <button className="button" >
              Read Full New
            </button></a>
        </div>
        </div>
    );
  });

  return (<div className='list-body'>
    <span>News Published List</span>
    <div className='news-painted'>{newsListado}</div>
  </div>)

}

