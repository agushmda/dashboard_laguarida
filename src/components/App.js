import React from 'react'
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import Content from './Content';
import { Route, Routes } from 'react-router-dom'
import NotFound from './NotFound';
import react from 'react';


function App() {
  return (
    <React.Fragment>
      <div id='wrapper'>
        <Routes>
          <Route path='/' element={<Sidebar />} />
       </Routes>   
          <div id='content-wrapper' className='d-flex flex-column'>
            <div id='content'>
              <Routes>
                <Route path='/' element={<Content />} />
                <Route path='*' element={<NotFound />} />   
              </Routes>
            </div>
            <Routes>
            <Route path='/' element={<Footer />} />
            </Routes>
          </div> 
      </div>
    </React.Fragment>
  )
}

export default App;
