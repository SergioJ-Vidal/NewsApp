import React from 'react'
import './Header.scss';

export const Header = () => {


  return (
    <header className="App-header">
      <h3>News Builder</h3>
        <div
          className="navigation-menu">
            <span>
              <a href="/">Home</a>
            </span>
            <span className='create-nav'>
              <a href="/form">Create New</a>
            </span>
            <span>
              <a href="/list">News Published</a>
            </span>
        </div>
    </header>
  )
}
