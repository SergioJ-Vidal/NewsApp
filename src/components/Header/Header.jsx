import React from 'react'
import './Header.scss';

export const Header = () => {


  return (
    <header className="App-header">
      <h3>Personal Page</h3>
      <div>
        <div
          className="navigation-menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/form">Create New</a>
            </li>
            <li>
              <a href="/list">News Published</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
