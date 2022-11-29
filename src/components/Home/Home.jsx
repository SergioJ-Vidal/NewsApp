import React from 'react'
import './Home.scss';
import list from "../assets/list.png"
import form from "../assets/form.png"


export const Home = () => {
  return (
    <div>
      <h3>Welcome! In this Website you can create your own news and check news from other sources</h3>
      <div className="body-home">
        <div className='make-box'>
          <span>Make your own new filling a formularie</span>
          <a href="http://localhost:3000/form" rel="noopener noreferrer" title="facebook">
            <img src={form} className="images-menu" alt="makenews"></img></a>
        </div>
        <div className='view-box'>
          <span>Visit the list of news that users had made</span>
          <a href="http://localhost:3000/list" rel="noopener noreferrer" title="facebook">
            <img src={list} className="images-menu" alt="newslist"></img></a>
        </div>
      </div>
    </div>
  )
}

