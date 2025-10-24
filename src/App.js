
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { BookingNeedProvider } from './components/context/bookingNeeds'

import NavBar from './components/NavBar'
import Home from './components/Home'
import Movie from './components/Movie'
import Booking from './components/Booking'
import Theater from './components/Theater'

function App() {
  return (
    <BrowserRouter>
      <BookingNeedProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/movie' element={<Movie />} />
          <Route path="/theater" element={<Theater />} />
          <Route path='/booking' element={<Booking />} />
        </Routes>
      </BookingNeedProvider>
    </BrowserRouter>
  );
}

export default App;
