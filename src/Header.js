import React from 'react'
import style from "./news.module.css"
import NewsItem from './NewsItem'

function Header() {
  return (
    <div>
      <header className={style.header}>
      <h1>News Express</h1>
      </header>
    </div>
  )
}

export default Header
