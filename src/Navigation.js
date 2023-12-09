import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewsList from './NewsList'
import NewsItem from './NewsItem'

function Navigation() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<NewsList/>}></Route>
      <Route path="/items/:index" element={<NewsItem />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Navigation
