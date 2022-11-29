import React, { useEffect, useState } from 'react'
import './ListNews.scss';
import axios from 'axios';
import logo from "../assets/fb-logo.png"
// import OneNew from './oneNew/OneNew'

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

  const newsListado = news.map((resultNew) => {
    return (
      <div key={resultNew.id} className="new-container">
        <div className="new-box">
          <h3 className="title">{resultNew.title}</h3>
          <span className="date">{resultNew.published_date}</span>
          <img src={logo} className="new-image" alt="news"></img>
          <span className="body">{resultNew.abstract}</span>
          <span className="author">{resultNew.byline}</span>

          <a href={resultNew.url} target="_blank" rel="noopener noreferrer"> <button className="sent-btn" >
            Read Full New
          </button></a>
        </div>
      </div>
    );
  });

  return (<div className='list-body'>
    <h1>News Published List</h1>
    <div className='news-painted'>{newsListado}</div>
  </div>)

}

// export const ListNews = () => {

//   return (

//     <div>

//       <OneNew />

//     </div>

//   )

// }
